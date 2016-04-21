/* jshint esversion: 6, strict: true */

var fs = require('fs'),
	files = fs.readdirSync(__dirname + '/');

files.forEach((file)=>{
	'use strict';

	if (file !== 'index.js'){
		let name = file.replace('.js', '');

		module.exports[name] = require('./' + name);
	}
});

