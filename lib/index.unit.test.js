const chai = require('chai');

const index = require('./index');

const expect = chai.expect;

describe('index', () => {
    it('should export an object', () => {
        expect(index).to.be.an('object');
    });

    it("should have added 'request'", () => {
        expect(index).to.have.property('request');
        expect(index.request).to.be.a('function');
    });
});
