var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies);
var models = require('../models');
var Page = models.Page;

describe('testing page model', function(){

	// beforeEach('Sync tables', function (done) {
 //        Page.sync({force: true})
 //            .then(function () {
 //                done();
 //            })
 //            .catch(done);
 //    });

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
	    describe('findByTag', function () {
	      it('gets pages with the search tag');
	      it('does not get pages without the search tag');
	    });
  	});
  	describe('Instance methods', function () {
	    describe('findSimilar', function () {
	      it('never gets itself');
	      it('gets other pages with any common tags');
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