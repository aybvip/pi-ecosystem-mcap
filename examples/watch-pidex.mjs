#!/usr/bin/env node
/**
 * watch-pidex.mjs
 * قراءة فقط — Zero deps — بدون مفاتيح خاصة، بدون توقيع معاملات
 * Pi Network Mainnet يشتغل على Stellar — نستعمل Horizon API (عامة ومفتوحة)
 */

const HORIZON = "https://api.mainnet.minepi.com";
const args = process.argv.slice(2);

function help() {
  console.log(`
pi-ecosystem-mcap / watch-pidex.mjs
قراءة فقط — Zero deps — Pi Horizon API

الاستخدام:
  node examples/watch-pidex.mjs --help
  node examples/watch-pidex.mjs --live        آخر transactions على Pi Mainnet
  node examples/watch-pidex.mjs --assets      أصول موجودة على Pi Mainnet
  node examples/watch-pidex.mjs --check       فحص الاتصال

ملاحظات:
  - قراءة فقط (GET requests فقط)
  - ما يطلب والو من مفاتيح خاصة
  - ماشي نصيحة مالية
  - راجع docs/PIDEX.md و docs/LIQUIDITY.md لفهم الآليات
`);
}

async function fetchJson(path) {
  const url = `${HORIZON}${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} — ${url}`);
  return res.json();
}

async function checkConnection() {
  console.log("🔍 فحص الاتصال بـ Pi Horizon API...");
  try {
    const data = await fetchJson("/");
    console.log("✅ متصل — Pi Mainnet Horizon");
    if (data.network_passphrase) {
      console.log("   Network:", data.network_passphrase);
    }
    if (data.core_latest_ledger) {
      console.log("   Latest Ledger:", data.core_latest_ledger);
    }
  } catch (e) {
    console.log("❌ تعذر الاتصال:", e.message);
    console.log("   تأكد من الاتصال بالإنترنت أو تحقق من docs/SOURCES.md");
  }
}

async function liveTxns() {
  console.log("📡 آخر 10 transactions على Pi Mainnet (قراءة فقط)...\n");
  try {
    const data = await fetchJson("/transactions?limit=10&order=desc");
    const records = data._embedded?.records ?? [];
    if (!records.length) {
      console.log("ما لقيناش transactions. ممكن API مختلف أو ما كايناش بيانات بعد.");
      return;
    }
    records.forEach((tx, i) => {
      const time = new Date(tx.created_at).toLocaleTimeString("ar-MA");
      const ops = tx.operation_count;
      const fee = (parseInt(tx.fee_charged) / 1e7).toFixed(7);
      console.log(`  [${i + 1}] ${time} | operations: ${ops} | fee: ${fee} Pi | ledger: ${tx.ledger}`);
    });
    console.log("\n📌 هاد البيانات للفهم فقط. راجع docs/PIDEX.md.");
  } catch (e) {
    console.log("❌ خطأ في جلب البيانات:", e.message);
  }
}

async function listAssets() {
  console.log("🪙 أصول موجودة على Pi Mainnet (عينة)...\n");
  try {
    const data = await fetchJson("/assets?limit=20&order=desc");
    const records = data._embedded?.records ?? [];
    if (!records.length) {
      console.log("ما لقيناش أصول. ممكن API مختلف.");
      return;
    }
    records.forEach((asset, i) => {
      const code = asset.asset_code ?? "PI";
      const accounts = asset.accounts?.authorized ?? "—";
      const amount = parseFloat(asset.amount ?? 0).toFixed(2);
      console.log(`  [${i + 1}] ${code.padEnd(12)} | حسابات: ${String(accounts).padStart(8)} | كمية: ${amount}`);
    });
    console.log("\n📌 هاد البيانات للفهم فقط — ماشي نصيحة مالية.");
  } catch (e) {
    console.log("❌ خطأ في جلب الأصول:", e.message);
  }
}

// --- Main ---
if (args.includes("--help") || args.length === 0) {
  help();
  process.exit(0);
}
if (args.includes("--check")) {
  await checkConnection();
  process.exit(0);
}
if (args.includes("--live")) {
  await liveTxns();
  process.exit(0);
}
if (args.includes("--assets")) {
  await listAssets();
  process.exit(0);
}
help();
process.exit(0);
