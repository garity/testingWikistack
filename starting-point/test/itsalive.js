// "use strict";
// const mocha = require('mocha');
// const chai = require('chai');
// const expect = chai.expect;
// const spies = require('chai-spies');
// chai.use(spies);

// describe('simple test practice', function(){
// 	it('should add two numbers', function(){
// 		expect(2+2).to.equal(4);
// 	});
// 	describe('asyc code testing', function(){
// 		it('should take approx. 1000 miliseconds', function(done){
// 			let timeNow = new Date();
// 			setTimeout(function(){
// 				const duration = new Date() - timeNow;
// 				expect(duration).to.be.closeTo(1000, 50);
// 				done();
// 			}, 1000)
// 		});
// 	});
// });

// describe('testing spies', function(){
// 	it('should call forEach once per element', function(){
// 		const testArr = [1, 2, 3, 4, 5];
// 		const testObj = {
// 			logger: function(val){
// 				console.log(val)
// 			}
// 		}
// 		const spy = chai.spy.on(testObj, 'logger');
// 		testArr.forEach(function(val){
// 			testObj.logger(val);
// 		});
// 		expect(spy).to.have.been.called(5);

// 		// function logVal(val, i){
// 		// 	console.log("logging val at :" + i + val);
// 		// }

// 		// logVal = chai.spy(logVal);
// 		// testArr.forEach(logVal);
// 		// expect(logVal).to.have.been.called(testArr.length);
// 	})
// })
// // describe()

