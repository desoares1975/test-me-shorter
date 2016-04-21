/* jshint esversion: 6, strict: true */
var expect = require('chai').expect,
	fileName = 'testFile.js',
	test = require('../../index');

describe('Test the aplication', ()=>{
	'use strict';

	describe('Test main method', ()=>{
		it('Should return error for no existin file', (done)=>{
			let newTest = test.main('inexitent_file_name');
			expect(newTest.message).to.equal('Cannot find module \'./inexitent_file_name\'');
			done();
		});
		it('Should return a string?@?!?!?!', (done)=>{
			let newTest = test.main(fileName);
console.log(newTest);
			done();
		});
	});
});
