export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-ad458963.js","js":["start-ad458963.js","chunks/vendor-8d39b5cc.js","chunks/preload-helper-ec9aa979.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^(?:\/(.*))?\/?$/,
				params: (m) => ({ index: m[1] || ''}),
				path: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
