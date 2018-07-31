'use strict';
const fs = require('fs');

module.exports = file => {
	let flag = true;
	try {
		fs.accessSync(file, fs.F_OK);
	} catch(err) {
		flag = false;
	}
	return flag;
}
