
(async () =>
{
	const cp = require("child_process") as typeof import("child_process");
	const fs = require("fs") as typeof import("fs");
	const dir = "./+build/";
	const copy = (file: string) => fs.copyFileSync("./" + file, dir + file);
	
	const run = (cmd: string) => new Promise<void>(r => cp.exec(cmd, () => r()));
	await run(`tsc -p ./tsconfig.release.json`);
	await run(`terser ${dir}hut.js > ${dir}hut.min.js`);
	
	const files = [
		"LICENSE",
		"readme.md",
		"readme-poster.png",
	];
	
	files.map(f => copy(f));
	
	const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"));
	packageJson.files = [
		...files,
		"hut.js",
		"hut.min.js",
		"hut.d.ts",
		"hut.d.ts.map"
	];
	
	const json = JSON.stringify(packageJson, null, "\t");
	await fs.promises.writeFile(dir + "package.json", json);
})();
