/**
 * Created by wangyao on 8/8/16.
 * Description: Ridiculous tests.
 */

var should = require('should');
var assert = require('assert');

describe('Test Framework', function () {
    it('should have mocha installed and running', function () {
        assert.equal(true, true);
    })
    it('should have the should library intalled and running for fluent testing', function () {
        true.should.eql(true);
    })
})