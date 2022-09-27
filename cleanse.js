/**
 * @module
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const os = require('os');

const isDir = false;
/**
 * Path to the API Reference directory and its index file requiring jsdoc.json for tutorials path
 *
 * @type       {Function}
 */
const tutorialsPathDir = isDir
	? require(`${
			require('./jsdoc.json').opts.tutorials
	  }API Reference/index.html`).toString()
	: '';

const isApi = process.argv[2] == 'api';
const isNotes = process.argv[2] == 'notes';
// 'tutorials' config should end with a slash
const tutorialsPath = `${require('./jsdoc.json').opts.tutorials}${
	isApi
		? 'API Reference.html'
		: isNotes
		? 'Full Notes.html'
		: 'API Reference.html'
}`;
const tutorialsPathRelative = `./tutorials/${
	isApi
		? 'API Reference.html'
		: isNotes
		? 'Full Notes.html'
		: 'API Reference.html'
}`;

const fsWriteFileSync = util.promisify(fs.writeFile);
const user = os.userInfo().username;

const file2EscapeFull = path.resolve(process.argv[2] || '');
const file2EscapeDynamic = path.join(
	'/home/',
	user,
	'Notes',
	process.argv[2] || '',
	'API Reference.html'
);
let file;
let removeStyleOpeningTag;
let removeStyleClosingTag;
let removeStyleTag$Content;
let unescapedCode;
let unescapedLink;
let final;
fs.readFile(tutorialsPathRelative, (err, tutFile) => {
	if (err || !tutFile) process.exit(0);
	file = tutFile.toString();
	removeStyleOpeningTag = file.replace(/(\?i)<style[^>]*>/, '');
	removeStyleClosingTag = removeStyleOpeningTag.replace(
		/(\?i)<\/style[^>]*>/,
		''
	);
	removeStyleTag$Content = file.replace(/<style[^$]+>[^$]+<\/style>/, '');
	unescapedCode = removeStyleTag$Content.replace(
		/`([^`]+)`/g,
		'<code>$1</code>'
	);
	unescapedLink = unescapedCode.replace(
		/\[(.+)\]\((.+)\)/,
		'<a href="$2">$1</a>'
	);

	final = unescapedLink;
});

(async () => {
	try {
		console.info(`Escaping Markdown...`);
		console.time('overwrite-unescaped-markdown');
		await fsWriteFileSync(
			tutorialsPathRelative,
			isApi ? final.trim() : isNotes ? removeStyleTag$Content.trim() : ''
		);
		console.timeEnd('overwrite-unescaped-markdown');
		console.info('Done Escaping Markdown!');
	} catch (e) {
		// throw e;
		process.exit(0);
	}
})();

module.exports = (f) => f;
