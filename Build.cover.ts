
(async () =>
{
	const cp = require("child_process") as typeof import("child_process");
	const fs = require("fs") as typeof import("fs");
	const dir = "./+build/";
	const copy = (file: string) => fs.copyFileSync("./" + file, dir + file);
	
	const run = (cmd: string) => new Promise<void>(r => cp.exec(cmd, () => r()));
	await run(`tsc -p ./tsconfig.release.json`);
	await run(`terser ${dir}hot.js > ${dir}hot.min.js`);
})();
