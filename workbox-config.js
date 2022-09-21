module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,png,html,txt,js,css,cjs,jpg,ts}'
	],
	swDest: 'build/sw.js',
	swSrc: 'service-worker.ts'
};