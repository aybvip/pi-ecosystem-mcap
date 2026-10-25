#!/usr/bin/env node
/**
 * self-test.mjs - فحوصات محلية شاملة
 */

import fs from "node:fs";
import path from "node:path";

function test() {
  const required = [
    "README.md",
    "README.ar.md",
    "README.en.md",
    "docs/CONFIRMED.md",
    "docs/MARKETCAP_IN_PI.md",
    "docs/OUSD.md",
    "docs/PIDEX.md",
    "docs/TOKENS_NFTS_AI.md",
    "docs/SPECULATION.md",
    "docs/SOURCES.md",
    "docs/LIQUIDITY.md",
    "docs/FIRST_MINUTES.md",
    "docs/CASE_CIDI.md",
    "DISCLAIMER.md",
    "SECURITY.md",
    "LICENSE",
    "index.html",
    "llms.txt",
  ];

  let ok = 0;
  for (const f of required) {
    if (fs.existsSync(path.join(process.cwd(), f))) {
      console.log("PASS", f);
      ok++;
    } else {
      console.log("FAIL", f);
    }
  }

  console.log(`\n${ok}/${required.length} checks passed`);
  process.exit(ok === required.length ? 0 : 1);
}

test();
