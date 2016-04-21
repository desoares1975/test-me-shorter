/* jshint esversion: 6, strict: true */
var file = process.argv[2],
	fs = require('fs');

module.exports.main = (file)=>{
	'use strict';

	if (file){
		console.log('Dear user, if your code have debuging logs, you should remove  it before'+
			'benchmarking it, this application will only make the code smaller.');
		console.time();

		require('./' + file);
		console.timeEnd();
	}
}

module.exports.minify = (file)=>{
	'use strict';

	var content = fs.readFile(file, 'utf-8', (err, data)=>{
		if (err) {
			throw err;
		}

		data = data
		.replace(/[\n\t]/g, " ")
		.replace(/\ */g, '')
		//.replace(/\ +/g, '');


console.log(data);

	});
}