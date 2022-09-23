const liveServer = require('live-server');
const cp = require('child_process');
const util = require('util');

// const cpExec = util.promisify(cp.exec);

const params = {
	port: 8181,
	root: './docs',
	// watch: "./**/*.js",
	// watch: "./docs/**/*.html",
	watch: './src/**/*.js',
	// ignore: "./(node_modules/)",
	file: './docs/index.html',
	// middleware: ["/jsdocGenerateMiddleware"],
	middleware: [
		function (req, res, next) {
			cp.exec('npm run doc', (err, stdout, stderr) => {
				if (err) return next(err);
				if (stderr) return next(stderr);
				console.info(stdout);
			});
			next();
		},
		/*async function (req, res, next) {
			try {
				const cpRes = await cpExec('npm run doc');
				console.info(cpRes.stdout);
				next();
			} catch (e) {
				if (e instanceof Object) return next(e.stderr);
				next(e);
			}
		},*/
	],
	open: false,
	wait: 0,
};

liveServer.start(params);
