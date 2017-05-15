/**
 * http://usejsdoc.org/
 */

var lib = require('./lib');
var should = require("should");
var fs = require('fs');

describe('module', function() {
    describe('limit', function() {
        it('limit should success', function() {
            lib.limit(10).should.be.equal(10);
        });
    });
});

describe('async', function() {
    this.timeout(10000);
    it('async', function(done) {
        lib.async(function(result) {
            console.log(result);
            console.log(done);
            done();
        });
    });
});

describe('should', function() {
    describe('#Promise', function() {
        it('should.reject', function() {
            (new Promise(function(resolve, reject) {
                reject(new Error('wrong'));
            })).should.be.rejectedWith('wrong');
        });

        it('should.fulfilled', function() {
            (new Promise(function(resolve, reject) {
                resolve({
                    username : 'jc',
                    age : 18,
                    gender : 'male'
                })
            })).should.be.fulfilled().then(function(it) {
                it.should.have.property('username', 'jc');
            })
        });
    });
});

describe("getContent", function() {
    var _readFile;
    before(function() {
        _readFile = fs.readFile;
        fs.readFile = function(filename, encoding, callback) {
            process.nextTick(function() {
                callback(new Error("mock readFile error"));
            });
        };
    });
    it("mock readFile error", function(done) {
        lib.getContent('./lib.js', function(result) {
            console.log(result);
            console.log(done);
            done();
        });
    });
    after(function() {
        // 用完之后记得还原。否则影响其他case
        fs.readFile = _readFile;
    })
});

var muk = require('muk');

describe("use muk", function() {
    before(function() {
        muk(fs, 'readFile', function(path, encoding, callback) {
            process.nextTick(function() {
                callback(new Error("mock readFile error"));
            });
        });
    });
    it("mock readFile error", function(done) {
        lib.getContent('./lib.js', function(result) {
            console.log(result);
            console.log(done);
            done();
        });
    });
    after(function() {
        muk.restore();
    });
    
})

var rewire = require('rewire');

describe("test private function", function() {



    it('limit should return success', function() {
        var lib = rewire('./lib');
        var _adding = lib.__get__('_adding');
        console.log(_adding(1,2));
    });
    
})
