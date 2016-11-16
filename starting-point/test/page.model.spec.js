// var chai = require('chai');
// var expect = chai.expect;
// var spies = require('chai-spies');
// chai.use(spies);
// chai.should();
// chai.use(require('chai-things'));
// var models = require('../models');
// var Page = models.Page;
// var Promise = require('bluebird');


// describe('testing page model', function(){

// 	beforeEach('Sync tables', function (done) {
//         Page.sync({force: true})
//             .then(function () {
//                 done();
//             })
//             .catch(done);
//     });

// 	describe('Virtuals', function () {
// 		var page;

//     	beforeEach('Add some pages', function () {
// 	    	 page = Page.build();
// 	    });

// 	    describe('route', function () {
// 	      it('returns the url_name prepended by "/wiki/"', function(){
// 	      	page.urlTitle = "java_script";

// 	      	expect(page.route).to.be.equal("/wiki/java_script");
// 	      });
// 	    });
// 	    describe('renderedContent', function () {
// 	      it('converts the markdown-formatted content into HTML');
// 	    });
// 	});

//   	describe('Class methods', function () {

//   		beforeEach('populate db with some pages', function(done){
//   			Page.create({
//   				title: 'sql123',
//   				content: 'Database, more content...',
//   				tags: ['programming', 'coding', 'computers']
//   			})
//   			.then(function(){
//   				done();
//   			})
//   			.catch(done);
//   		});

// 	    describe('findByTag', function () {
// 	      it('gets pages with the search tag', function(){
// 	      	Page.findByTag('coding')
// 	      	.then(function(pages){
// 	      		expect(pages).to.have.lengthOf(1);
// 	      	})
// 	      });
// 	      it('does not get pages without the search tag');
// 	    });
//   	});
//   	describe('Instance methods', function () {
//   		// var page1;
//   		// 	page2,
//   		// 	page3;

//   		beforeEach(function(done){
//   			// [page1, page2, page3]
  			
//   			/*return*/Promise.all([
//   				Page.create({
//   				title: 'python',
//   				content: 'stuff about python, and more content...',
//   				tags: ['programming', 'coding', 'computers']
// 	  			}),
// 	  			Page.create({
// 	  				title: 'sql123',
// 	  				content: 'Database, more content...',
// 	  				tags: ['programming']
// 	  			}),
// 	  			Page.create({
// 	  				title: 'All about dogs',
// 	  				content: 'this has nothing to do with computers',
// 	  				tags: ['puppy', 'ears', 'tail']
// 	  			}),
// 	  			Page.create({
// 	  				title: 'typing',
// 	  				content: 'Mavis Beacon teaching typing class',
// 	  				tags: ['computers']
// 	  			})
//   			])
//   			.then(function(/*arr*/){
//   				done();
//   				//page1= arr[0];
//   				//page2= arr[1];
//   			})
//   			.catch(done);
//   		})
// 	    describe('findSimilar', function () {
// 	      it('never gets itself', function(done){
// 	      	Page.findOne({
// 	      		where: {
// 	      			id: 1
// 	      		}
// 	      	})
// 	      	.then(function(page){
// 	      		return page.findSimilar();
// 	      	})
// 	      	.then(function(pages){
// 	      		expect(pages.id).should.not.include({id: 1});
// 	      	})
// 	      	.then(function(){
// 	      		done();
// 	      	})
// 	      	.catch(done);
	      	
// 	      });
// 	      it('gets other pages with any common tags', function(done){
// 	      	Page.findOne({
// 	      		where: {
// 	      			id: 1
// 	      		}
// 	      	})
// 	      	.then(function(page){
// 	      		return page.findSimilar();
// 	      	})
// 	      	.then(function(pages){
// 	      		// expect(pages.id).should.include.something.that.deep.equals({id: 2});
// 	      		// expect(pages.id).should.include.something.that.deep.equals(4);
// 	      		expect(pages).to.contain.a.thing.with.property("id", 2);
// 	      		expect(pages).to.contain.a.thing.with.property("id", 4);
// 	      	})
// 	      	.then(function(){
// 	      		done();
// 	      	})
// 	      	.catch(done);
// 	      });
// 	      it('does not get other pages without any common tags', function(done){
//       		Page.findOne({
//       		where: {
//       			id: 2
//       		}
// 	      	})
// 	      	.then(function(page){
// 	      		return page.findSimilar();
// 	      	})
// 	      	.then(function(pages){
// 	      		console.log(pages[0].toJSON());
// 	      		console.log("1");
// 	      		expect(pages).should.not.include({id: 2});
// 	      		console.log("2");
// 	      		expect(pages).should.not.include({id: 3});
// 	      		console.log("3");
// 	      	})
// 	      	.then(function(){
// 	      		done();
// 	      	})
// 	      	.catch(done);
// 	      });
// 	    });
//   	});

//   	describe('Validations', function () {
//   		var page;
//   		beforeEach(function(){
//   			 page = Page.build();
//   		});

// 	    it('errors without title', function(){
// 	    	 page.urlTitle = "java_script";
// 	    	 page.content = "it has prototypal inheritance";
// 	    	 page.validate()
// 	    	 		.then(function(page){

// 	    	 		}).catch(function(err){
// 	    	 			expect(err.errors).to.contain.a.thing.with.property("title");
// 	    	 		});
// 	    	 // expect(page.title)
// 	    });
// 	    it('errors without content');
// 	    it('errors given an invalid status');
//   	});

//   	describe('Hooks', function () {
//     	it('it sets urlTitle based on title before validating');
//   	});

// });