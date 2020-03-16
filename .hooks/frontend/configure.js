/*
	Run from package.json preinstall script
*/
const log = null;

try {
	log = require('../log');
} catch (err) {}

// Enforces the use of npm
if (process.env.npm_execpath.match(/yarn/)) {
	try {
		log.error('Use npm to install your packages, not yarn.');
	} catch (err) {
		console.error('Use npm to install your packages, not yarn.');
	}

	process.exit(1);
}
