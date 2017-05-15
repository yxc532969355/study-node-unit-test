/**
 * http://usejsdoc.org/
 */
var assert = require('chai').assert;
var should = require('should');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [ 1, 2, 3 ].indexOf(5));
            assert.equal(-1, [ 1, 2, 3 ].indexOf(0));
        });
    });
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            [ 1, 2, 3 ].indexOf(5).should.equal(-1);
            [ 1, 2, 3 ].indexOf(0).should.equal(-1);
        });
    });
});

describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User('Luna');
            user.save(function(err) {
                if (err)
                    throw err;
                done();
            });
        });
    });
});

beforeEach(function() {
    return db.clear().then(function() {
        return db.save([ tobi, loki, jane ]);
    });
});

describe('#find()', function() {
    it('respond with matching records', function() {
        return db.find({
            type : 'User'
        }).should.eventually.have.length(3);
    });
});

describe('hooks', function() {

    before(function() {
        // runs before all tests in this block
    });

    after(function() {
        // runs after all tests in this block
    });

    beforeEach(function() {
        // runs before each test in this block
    });

    afterEach(function() {
        // runs after each test in this block
    });

    // test cases
});