'use strict';
const fs = require('fs');

module.exports = path => {
	try {
		if (fs.existsSync(path)) {
			return true;
		}
	} catch (_) {}

	return false;
};
