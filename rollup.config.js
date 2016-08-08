export default {
	entry: 'test/test.src.js',
  globals: {
		Object: 'Object',
		window: 'window',
    console: 'console'
	},
	sourceMap: true,
	moduleName: 'test',
	targets: [
		{ dest: 'test/index.js', format: 'cjs' }
	]
};
