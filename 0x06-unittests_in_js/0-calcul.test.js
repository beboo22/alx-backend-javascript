const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test function calculateNumber', () => {
  it('test the addition for real number', () => {
    const result = calculateNumber(3, 2);
    assert.equal(result, 5);
  });
  it('test the addition for real and decimal number', () => {
    const result = calculateNumber(1, 3.7);
    assert.equal(result, 5);
  });
  it('test the addition for decimal nunber', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });
  it('test the addition for decimal number', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.equal(result, 6);
  });
  it('test the addition for decimal number', () => {
    const result = calculateNumber(2.49, 3.49);
    assert.equal(result, 5);
  });
  it('test the addition for decimal number', () => {
    const result = calculateNumber(2.0, 3.0);
    assert.equal(result, 5);
  });
  it('test the addition for decimal number', () => {
    const result = calculateNumber(2.0, 2.59999);
    assert.equal(result, 5);
  });
});
