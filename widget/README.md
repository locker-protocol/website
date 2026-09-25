# `<lp-presale>` - Locker Protocol embeddable presale widget

A **self-hosted bundle** a launching team drops on its own website to run its presale
on Locker Protocol rails. No framework, no CDN, no server: a native web component
(Shadow DOM) + ethers. Host the whole `dist/` folder - the entry is ~310 KB and the
WalletConnect machinery lives in lazy chunks that are only downloaded (from your own
`dist/chunks/`) when a visitor actually picks WalletConnect.

```html
<script type="module" src="/assets/lp-presale/lp-presale.js"></script>

<lp-presale
    round="0xYourPresaleRound"
    factory="0xCanonicalLaunchFactory"
    rpc="https://your-chain-rpc"
    chain-id="8453"
    wc-project-id="yourWalletConnectCloudId"
    vault-url="https://lockerprotocol.com/vault"
    lang="en">
</lp-presale>
```

| Attribute | Required | Meaning |
|---|---|---|
| `round` | yes | The PresaleRound address |
| `factory` | yes | The canonical LaunchFactory of the chain (published by Locker Protocol) |
| `rpc` | yes | Any RPC URL of the sale's chain - read-only data |
| `chain-id` | recommended | Expected chain for wallet transactions (auto network-switch) |
| `wc-project-id` | no | WalletConnect Cloud projectId - enables the WalletConnect option. Note: the WC protocol relays through walletconnect.com infrastructure (inherent to WC) |
| `vault-url` | no | Install page encoded in the Locker Wallet QR (default lockerprotocol.com/vault) |
| `lang` | no | One of the 16 project locales (`en` default). `ar`/`he` flip the widget to RTL. Locales other than `en`/`fr` are scaffolded but not written yet: every key still missing falls back to English, never to a blank label |

## One-line embed (`launcher.js`)

For the nine chains Locker Protocol has deployed to, the integrator supplies **only the
round address**:

```html
<script type="module" src="https://lockerprotocol.com/widget/launcher.js?round=0xYourRound&chain=8453"></script>
<div id="lp-launcher"></div>
```

Published by `start-deploy-github-website.sh` in three forms:

| URL | Use |
|---|---|
| `/widget/launcher.js` | rolling - always the current bundle |
| `/widget/<version>/launcher.js` | pinned - immutable, never changes under your page |
| `/widget/lp-presale-widget.zip` | the whole bundle, to serve from your own domain |

Self-hosting the same one-liner is just a matter of the path:
`src="/assets/lp-presale/launcher.js?round=…&chain=…"`.

The script reads its own URL, then derives the canonical `LaunchFactory` **and** a
read-only RPC for that chain from its own bundle - so a compromised page cannot swap in
a hostile factory or a lying RPC. Optional query params: `mount` (target element id,
default `lp-launcher`), `lang`, `wc-project-id`, `vault-url`.

Supported chains: Ethereum (1), Optimism (10), BNB Chain (56), Polygon (137), Base
(8453), Arbitrum (42161), Avalanche (43114), Linea (59144), Robinhood Chain (4663).
Any other chain is refused with a visible error - use the `<lp-presale>` element with an
explicit `rpc` if you run your own node on a supported chain.

## Wallets & the Locker Wallet funnel

The connect button opens a chooser: **browser wallet** (injected), **WalletConnect**
(mobile + long-tail wallets, lazy chunk), or **Locker Wallet** - the acquisition
funnel: a modal shows an install QR for the free offline Locker Wallet and lets the
visitor scan (BarcodeDetector, with paste fallback) the address they created in it.
That address becomes the **vesting beneficiary**: purchases go through
`buyWith*For(beneficiary)` - the grant vests to the investor's cold address from the
first second, while payment and refund rights stay with the paying wallet. The
beneficiary is displayed in the widget and is part of the signed calldata. Claimed
tokens are still only ever paid to the grant holder itself (the beneficiary signs its
own claims - offline via the Locker Wallet, or on the Locker Protocol claim page).

## What visitors get

- **Buy tab** - current tranche price, live quote (`quoteStable`, the exact contract
  math), pay in any of the round's canonical stablecoins - stablecoin-only, no
  oracle, native pays gas only (approve+buy handled), tranche ladder with progress,
  soft-cap progress, countdown.
- **My tokens tab** - allocation, claimed, claimable now, one-click `claim()` after a
  successful sale; one-click full refund after a failed one.
- **Details tab** - the on-chain assurances: round verified against the factory, sale
  supply pre-deposited, "X% of the raise locked in the team's Locker", the full
  vesting schedule and TGE date, and every address for manual cross-checking.
- Anyone can trigger `settle()` from the widget once the sale is over.
- Light/dark theme (`prefers-color-scheme`), isolated styles (Shadow DOM).

## Security model - read before embedding

1. The widget **refuses to render** an address the LaunchFactory does not recognize
   (`isRound`). That proves which bytecode is running - it does NOT endorse the token.
   The factory it asks is the **canonical one for the chain, hardcoded in the bundle**
   (`src/canonical.js`), never the `factory` attribute: the attribute is advisory and a
   mismatch is a refusal. A factory chooses the rails every round depends on, so
   trusting an attribute-supplied one would void every other guarantee (test 84/T1).
2. The contract is the source of truth: prices, tranches and schedules are read from
   the chain; the widget cannot lie about them, and the visitor's wallet always shows
   the real contract address being called.
3. Visitors should cross-check the round/factory addresses (shown in Details) against
   the team's official announcement - a compromised website could point the widget at
   a different (factory-legitimate) round.
4. KYC / geographic restrictions, where required, are the operating team's
   responsibility (Locker Protocol is neutral infrastructure).

## Build & demo

```bash
cd ui/presale-widget
npm run build          # → dist/lp-presale.js (uses locker-contrat's esbuild)

# live demo against the local testnet:
#   npx hardhat node                     (repo root)
#   node deploy/deploy-testnet.js
#   node scripts/create-demo-presale.js
#   ./start-locker-launch.sh             (repo root - serves the demo on :4005)
#     → /demo/           the <lp-presale> element
#     → /demo/launcher.html   the one-line launcher.js embed
node smoke-test.mjs                    # headless check of the data layer + canonical map
```

## End-to-end tests (Cypress)

The `launch` suite drives the real bundle against a real round it creates itself
(verified rendering, tranche ladder, live quotes, a genuine approve+buy through a
stubbed wallet proxied to Hardhat, and the non-`isRound` rejection):

```bash
./start-locker-launch.sh          # :4005
./run_cypress_all.sh launch       # or part of ./run_cypress_all.sh (runs last)
```

Note: the widget displays time from the **chain clock** (block timestamp + elapsed),
never the visitor's wall clock - the contract lives on chain time and the two drift.
