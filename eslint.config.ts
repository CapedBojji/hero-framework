import style from "@isentinel/eslint-config";

export default style({
	formatters: true,
	gitignore: true,
	react: true,
    rules: {
        "ts/no-magic-numbers": [
			"error",
			{
				ignore: [0, 1],
				ignoreReadonlyClassProperties: true,
				ignoreTypeIndexes: true,
			},
		],
	},

	typescript: {
		parserOptions: {
			ecmaVersion: 2018,
			jsx: true,
			project: "tsconfig.build.json",
			sourceType: "module",
			useJSXTextNode: true,
		},
		tsconfigPath: "tsconfig.build.json",
	},
});