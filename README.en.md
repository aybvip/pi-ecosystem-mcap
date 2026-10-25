# pi-ecosystem-mcap

> Independent and honest analysis of the Pi ecosystem: market-cap framing, PiDEX, OUSD, AI Tokens, NFTs — and a real case study using CiDi Games / ELF.

[![Independent](https://img.shields.io/badge/Independent-unofficial-orange)](DISCLAIMER.md)
[![Read-only](https://img.shields.io/badge/Docs%20%2B%20read--only%20tools-blue)](SECURITY.md)
[![No financial advice](https://img.shields.io/badge/No%20financial%20advice-red)](DISCLAIMER.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[العربية](README.ar.md) · [الموقع](https://aybvip.github.io/pi-ecosystem-mcap/) · [machine index](llms.txt)

## Purpose

This repo is about understanding **mechanisms**, not predicting prices.

It focuses on simple questions:

- **What is officially confirmed?** What is community speculation?
- **Can the ecosystem market-cap be measured in Pi** as a *numeraire* (unit of account)?
- **OUSD as a complementary stablecoin** — what does that actually mean?
- **PiDEX**, liquidity, order books, and why the first seconds matter
- **AI Tokens / NFTs** — why Pi is likely the first destination before them
- **CiDi Games / ELF** — a real, live case study from inside the Pi ecosystem

## Quick Summary

| Point | Assessment | Notes |
|---|---|---|
| Pi is the primary currency of the ecosystem | **Confirmed** | Stated in [Pi's official Stablecoins blog](https://minepi.com/blog/pi-stablecoins/) |
| Pi partnership with Open Standard / OUSD | **Confirmed** | [PiCoreTeam tweet Sep 30 2026](https://x.com/PiCoreTeam/status/2105353237750833470) |
| OUSD is complementary to Pi, not a replacement | **Confirmed** | "Pi should remain the primary crypto across the network's processes, with stablecoins providing a complementary role." |
| Exploring Pioneer rewards and broader OUSD utility | **Confirmed** | Stated explicitly in the official blog |
| CiDi Games — official Pi Network Ventures investee | **Confirmed** | [minepi.com](https://minepi.com) |
| "All assets convert directly to Pi as a mandatory rule" | **Unconfirmed** | No official statement found as of now |
| "Ecosystem market-cap measured in Pi" as a general concept | **Debatable / Community view** | Logical, but not an official announcement in that exact form |
| Exact timing of PiDEX open to all | **Unconfirmed** | In testing/preparation, no official date |

## Start Here

| File | Purpose |
|---|---|
| [`docs/CONFIRMED.md`](docs/CONFIRMED.md) | **Confirmed / Partially confirmed / Unconfirmed** table with sources |
| [`docs/MARKETCAP_IN_PI.md`](docs/MARKETCAP_IN_PI.md) | The *numeraire* concept — why many say "measured in Pi" |
| [`docs/OUSD.md`](docs/OUSD.md) | OUSD role, value freezing, the difference between "stable settlement tool" and "replacement" |
| [`docs/PIDEX.md`](docs/PIDEX.md) | Order book, liquidity, speed, why tracking the asset you sold matters |
| [`docs/TOKENS_NFTS_AI.md`](docs/TOKENS_NFTS_AI.md) | AI tokens and NFT behavior — why Pi typically comes first |
| [`docs/LIQUIDITY.md`](docs/LIQUIDITY.md) | AMM vs Order Book, TVL, Depth, Spread — explained simply |
| [`docs/FIRST_MINUTES.md`](docs/FIRST_MINUTES.md) | What happens in the first 60 seconds when a new asset hits PiDEX |
| [`docs/CASE_CIDI.md`](docs/CASE_CIDI.md) | **Case study: CiDi Games / ELF** — real ecosystem economics in action |
| [`docs/SPECULATION.md`](docs/SPECULATION.md) | Clear separation between fact and speculation |
| [`docs/SOURCES.md`](docs/SOURCES.md) | All official sources with links |

## Repo Principles

- **Separate confirmed from speculation** — any statement not backed by an official source is labeled **speculation**
- **Read-only** — all scripts here are read-only and do nothing else
- **Not financial advice** — [DISCLAIMER](DISCLAIMER.md)
- **Calm and precise** — no exaggeration, no minimization
- **Mechanism over timing**

## Quick Start

```bash
npm test
node examples/watch-pidex.mjs --help
node examples/watch-pidex.mjs --live
```

## Disclaimer

This project is **independent and unofficial**, not affiliated with Pi Network or its Core Team. Nothing here is financial advice. [`DISCLAIMER.md`](DISCLAIMER.md) | [`SECURITY.md`](SECURITY.md)
