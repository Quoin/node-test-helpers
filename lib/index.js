const testHelpersCore = require('@quoin/node-test-helpers-core');
const chaiHttp = require('chai-http');
const dirtyChai = require('dirty-chai');
const sinonChai = require('sinon-chai');

testHelpersCore.chai.use(dirtyChai);
testHelpersCore.chai.use(sinonChai);
testHelpersCore.chai.use(chaiHttp);

testHelpersCore.request = testHelpersCore.chai.request;

module.exports = testHelpersCore;
