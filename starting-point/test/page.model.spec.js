var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies);
chai.should();
chai.use(require('chai-things'));
var models = require('../models');
var Page = models.Page;
var Promise = require('bluebird');

describe('testing page model', function(){

	beforeEach('Sync tables', function (done) {
        Page.sync({force: true})
            .then(function () {
                done();
            })
            .catch(done);
    });

 	// var page;

  //   beforeEach('Add some pages', function (done) {

  //   	 page = Page.build();
  //   	 done();
        // page = Page.bulkCreate([
        //     {title: 'java script', urlTitle: 'java_script', content: 'its a front end language', status: 'open', tags: '[]'},
        //     {title: 'c++', urlTitle: 'c', content: 'object oriented language', status: 'open', tags: '[]'},
        //     {title: 'php ', urlTitle: 'php', content: 'server side scripting', status: 'open', tags: '[]'},
        //     {title: 'machine learning', urlTitle: 'machine_learning', content: 'machine learning', status: 'closed', tags: '[]'},
        //     {title: 'sql123', urlTitle: 'sql123', content: 'Database', status: 'closed', tags: '[]'}
        // ])
        //     .then(function () {
        //         done();
        //     })
        //     .catch(done);

    // });

	describe('Virtuals', function () {
		var page;

    	beforeEach('Add some pages', function () {
	    	 page = Page.build();
	    });

	    describe('route', function () {
	      it('returns the url_name prepended by "/wiki/"', function(){
	      	page.urlTitle = "java_script";

	      	expect(page.route).to.be.equal("/wiki/java_script");
	      });
	    });
	    describe('renderedContent', function () {
	      it('converts the markdown-formatted content into HTML');
	    });
	});

  	describe('Class methods', function () {

  		beforeEach(function(done){
  			Page.create({
  				title: 'sql123',
  				content: 'Database, more content...',
  				tags: ['programming', 'coding', 'computers']
  			})
  			.then(function(){
  				done();
  			})
  			.catch(done);
  		});

	    describe('findByTag', function () {
	      it('gets pages with the search tag', function(){
	      	Page.findByTag('coding')
	      	.then(function(pages){
	      		expect(pages).to.have.lengthOf(1);
	      	})
	      	// .then(function(){
	      	// 	done();
	      	// })
	      });
	      it('does not get pages without the search tag');
	    });
  	});
  	describe('Instance methods', function () {
  		// var page1;
  		// 	page2,
  		// 	page3;

  		beforeEach(function(done){
  			// [page1, page2, page3]
  			
  			Promise.all([
  				Page.create({
  				title: 'python',
  				content: 'stuff about python, and more content...',
  				tags: ['programming', 'coding', 'computers']
	  			}),
	  			Page.create({
	  				title: 'sql123',
	  				content: 'Database, more content...',
	  				tags: ['programming']
	  			}),
	  			Page.create({
	  				title: 'All about dogs',
	  				content: 'this has nothing to do with computers',
	  				tags: ['puppy', 'ears', 'tail']
	  			}),
	  			Page.create({
	  				title: 'typing',
	  				content: 'Mavis Beacon teaching typing class',
	  				tags: ['computers']
	  			})
  			])
  			.then(function(){
  				done();
  			})
  			.catch(done);
  		})
	    describe('findSimilar', function () {
	      it('never gets itself', function(done){
	      	Page.findOne({
	      		where: {
	      			id: 1
	      		}
	      	})
	      	.then(function(page){
	      		return page.findSimilar();
	      	})
	      	.then(function(pages){
	      		expect(pages.id).should.not.include({id: 1});
	      	})
	      	.then(function(){
	      		done();
	      	})
	      	.catch(done);
	      	
	      });
	      it('gets other pages with any common tags', function(){
	      	Page.findOne({
	      		where: {
	      			id: 2
	      		}
	      	})
	      	.then(function(page){
	      		return page.findSimilar();
	      	})
	      	.then(function(pages){
	      		console.log(pages);
	      		// expect(pages.id).should.include.
	      	})
	      });
	      it('does not get other pages without any common tags');
	    });
  	});

  	describe('Validations', function () {
	    it('errors without title');
	    it('errors without content');
	    it('errors given an invalid status');
  	});

  	describe('Hooks', function () {
    	it('it sets urlTitle based on title before validating');
  	});

});