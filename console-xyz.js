
// いつもの
console.log("log log log");

// エラーと警告と情報
console.error("error error error");
console.warn("warn warn warn");
console.info("info info info");

// 入れ子構造
console.group();
console.log("group");
console.group("group level 2");
console.log("group group");
console.groupCollapsed();
console.log("group group group");
console.groupEnd();
console.log("group group");
console.groupEnd();
console.log("group");
console.groupEnd();

// タイマー
console.time("timer01");
for (let i = 0; i < 10000; i++) {}
console.timeEnd("timer01");
console.time("timer02");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("timer02");

// トレースログ
console.trace();

// テーブル
const row01 = { name: "row01", value: "table" };
const row02 = { name: "row02", value: "table table" };
const row03 = { name: "row03", value: "table table table" };
console.table({ row01, row02, row03 });

// その他
console.assert(true);
console.assert(false);
console.count("counter01");
console.count("counter01");
console.count("counter01");
console.count("counter02");
console.countReset("counter01");
console.count("counter01");
console.count("counter02");
