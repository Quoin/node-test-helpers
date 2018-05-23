# node-test-helpers

[![Build Status](https://travis-ci.org/Quoin/node-test-helpers.svg?branch=master)](https://travis-ci.org/Quoin/node-test-helpers)

This is an extension of [node-test-helpers-core](https://www.npmjs.com/package/@quoin/node-test-helpers-core) that adds chai plugins for projects.

## To install

To add the library to your project:

    npm install --save-dev @quoin/node-test-helpers

## Usage

An example of usage:

    const testHelpers = require('@quoin/node-test-helpers');

    const moduleToTest = require('./index');

    const expect = testHelpers.expect;

    describe("index", () => {
        it("should export a function with 2 params", () => {
            expect(index).to.be.a('function').to.have.lengthOf(2);
        });
    });

See the [lib/index.js](lib/index.js) file to see what libraries are imported and
refer to their respective documentation.

## Examples

See [node-test-helpers-core's README](https://github.com/Quoin/node-test-helpers-core/blob/master/README.md) for some examples.
