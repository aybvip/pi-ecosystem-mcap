#!/usr/bin/env node
/**
 * watch-pidex.mjs
 * قراءة فقط - لا يطلب مفاتيح ولا يوقع شي حاجة
 * غرضه فهم الآلية فقط
 */

const args = process.argv.slice(2);

function help() {
  console.log(`
pi-ecosystem-mcap / watch-pidex.mjs
قراءة فقط - Zero deps

الاستخدام:
  node examples/watch-pidex.mjs --help
  node examples/watch-pidex.mjs --check

ملاحظات:
  - هاد السكريبت دابا placeholder
  - غادي نضيفه لمصادر قابلة للقراءة فقط إذا توفرو
  - ماشي نصيحة مالية
`);
}

function check() {
  console.log("OK: read-only placeholder");
  console.log("راجع docs/PIDEX.md لفهم الآلية");
}

if (args.includes("--help") || args.length === 0) {
  help();
  process.exit(0);
}
if (args.includes("--check")) {
  check();
  process.exit(0);
}
help();
process.exit(0);
