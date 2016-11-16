var supertest = require('supertest');
var app = require('../app');
var agent = supertest.agent(app);

var models = require('../models');
var Page = models.Page;
var Promise = require('bluebird');

// var express = require('express');



describe('http requests', function () {

	beforeEach(function(done){
		Page.sync({force:true})
		.then(function(){
			done();
		})
	})

	describe('GET /wiki/', function () {
		it('gets 200 on index', function (done) {
			agent
			.get('/wiki')
			.expect(200, done);
		});
	});

	describe('GET /wiki/add', function () {
		it('responds with 200', function(done){
			agent
			.get('/wiki/add')
			.expect(200, done);
		});
	});

	describe('GET /wiki/:urlTitle', function () {
		beforeEach(function(done){
			Page.create({
  				title: 'python',
  				content: 'stuff about python, and more content...',
  				tags: ['programming', 'coding', 'computers']
	  			})
			.then(function(){
				done();
			})
			.catch(done);
		})
		it('responds with 404 on page that does not exist', function(){
			agent
			.get('wiki/somethingWrong')
			.expect(404);
		});
		it('responds with 200 on page that does exist', function(done){
			agent
			.get('/wiki/python')
			.expect(200, done);
		});
	});

	describe('GET /wiki/search/:tag', function () {

		beforeEach(function(done){
			Page.create({
  				title: 'python',
  				content: 'stuff about python, and more content...',
  				tags: ['programming', 'coding', 'computers']
	  			})
			.then(function(){
				done();
			})
			.catch(done);
		});

		it('responds with 200', function(done){
			agent
			.get('/wiki/search/coding')
			.expect(200, done);
		});
	});

	describe('GET /wiki/:urlTitle/similar', function () {
		beforeEach(function(done){
			Page.create({
  				title: 'python',
  				content: 'stuff about python, and more content...',
  				tags: ['programming', 'coding', 'computers']
	  			})
			.then(function(){
				done();
			})
			.catch(done);
		});
		it('responds with 404 for page that does not exist', function(){
			agent
			.get('/wiki/somethingWrong/similar')
			.expect(404);
		});
		it('responds with 200 for similar page', function(){
			agent
			.get('/wiki/python/similar')
			.expect(404);
		});
	});

	describe('POST /wiki', function () {
		// agent
		// .post('/some/route')
		// .send({someProp: 'someString'});
		it('responds with 302');
		it('creates a page in the database');
	});

});