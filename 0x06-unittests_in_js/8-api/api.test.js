const { expect } = require('chai');
const request = require('request');

describe('test API', () => {
  it('test status code of API', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('test result code of API', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
