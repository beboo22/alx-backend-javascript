const { expect } = require('chai');
const request = require('request');

describe('test API', () => {
  it('test status code of API', (done) => {
    request.get('http://localhost:7865', (_err, res, _body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('test status code of id is number', (done) => {
    request.get('http://localhost:7865/cart/12', (_err, res, _body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('test result code of API', (done) => {
    request.get('http://localhost:7865/cart/12', (_err, _res, body) => {
      expect(body).to.equal('Payment methods for cart :12');
      done();
    });
    request.get('http://localhost:7865/cart/-12', (_err, _res, body) => {
      expect(body).to.equal(404);
      done();
    });
    request.get('http://localhost:7865/cart/h645564-544-45646-', (_err, _res, body) => {
      expect(body).to.equal(404);
      done();
    });
  });
});
