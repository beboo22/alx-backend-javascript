const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('test function calculateNumber in 1-calcul', () => {
  it('test the addition for real number', () => {
    const result = calculateNumber('SUM', 3, 2);
    assert.equal(result, 5);
  });
  it('test the addition for real and decimal number', () => {
    const result = calculateNumber('SUM', 1, 3.7);
    assert.equal(result, 5);
  });
  it('test the addition for decimal number', () => {
    const result = calculateNumber('SUM', 1.2, 3.7);
    assert.equal(result, 5);
  });
  it('test the addition for decimal number', () => {
    const result = calculateNumber('SUM', 1.5, 3.7);
    assert.equal(result, 6);
  });
  it('test the addition for decimal number', () => {
    const result = calculateNumber('SUM', 2.49, 3.49);
    assert.equal(result, 5);
  });
  it('test the addition for decimal number', () => {
    const result = calculateNumber('SUM', 2.0, 3.0);
    assert.equal(result, 5);
  });
  it('test the addition for decimal number', () => {
    const result = calculateNumber('SUM', 2.0, 2.59999);
    assert.equal(result, 5);
  });
  // ========================================================================================
  it('test the SUBTRACT for real number with (-)ve result', () => {
    const result = calculateNumber('SUBTRACT', 2, 3);
    assert.equal(result, -1);
  });
  it('test the SUBTRACT for real and decimal number with (-)ve result', () => {
    const result = calculateNumber('SUBTRACT', 1, 3.7);
    assert.equal(result, -3);
  });
  it('test the SUBTRACT for decimal nunber', () => {
    const result = calculateNumber('SUBTRACT', 1.2, 3.7);
    assert.equal(result, -3);
  });
  it('test the SUBTRACT for decimal number with (-)ve result', () => {
    const result = calculateNumber('SUBTRACT', 1.5, 3.7);
    assert.equal(result, -2);
  });
  it('test the SUBTRACT for decimal number with (-)ve result', () => {
    const result = calculateNumber('SUBTRACT', 2.49, 3.49);
    assert.equal(result, -1);
  });
  it('test the SUBTRACT for decimal number with (-)ve result', () => {
    const result = calculateNumber('SUBTRACT', 2.0, 3.0);
    assert.equal(result, -1);
  });
  it('test the SUBTRACT for decimal number with (-)ve result', () => {
    const result = calculateNumber('SUBTRACT', 2.0, 2.59999);
    assert.equal(result, -1);
  });
  // ========================================================================================
  it('test the SUBTRACT for real number with', () => {
    const result = calculateNumber('SUBTRACT', 3, 2);
    assert.equal(result, 1);
  });
  it('test the SUBTRACT for real and decimal number with (+)ve result', () => {
    const result = calculateNumber('SUBTRACT', 3.7, 1);
    assert.equal(result, 3);
  });
  it('test the SUBTRACT for decimal nunber', () => {
    const result = calculateNumber('SUBTRACT', 3.7, 1.2);
    assert.equal(result, 3);
  });
  it('test the SUBTRACT for decimal number with (+)ve result', () => {
    const result = calculateNumber('SUBTRACT', 3.7, 1.5);
    assert.equal(result, 2);
  });
  it('test the SUBTRACT for decimal number with (+)ve result', () => {
    const result = calculateNumber('SUBTRACT', 3.49, 2.49);
    assert.equal(result, 1);
  });
  it('test the SUBTRACT for decimal number with (+)ve result', () => {
    const result = calculateNumber('SUBTRACT', 3.0, 2.0);
    assert.equal(result, 1);
  });
  it('test the SUBTRACT for decimal number with (+)ve result', () => {
    const result = calculateNumber('SUBTRACT', 2.59999, 2.0);
    assert.equal(result, 1);
  });
  // ========================================================================================
  it('test the DIVISION for real number', () => {
    const result = calculateNumber('DIVIDE', 3, 2);
    assert.equal(result, 1.5);
  });
  it('test the DIVISION for real number', () => {
    const result = calculateNumber('DIVIDE', 3, 0);
    assert.equal(result, "Error");
  });
  it('test the DIVISION for real and decimal number', () => {
    const result = calculateNumber('DIVIDE', 1, 3.7);
    assert.equal(result, 0.25);
  });
  it('test the DIVISION for real and decimal number', () => {
    const result = calculateNumber('DIVIDE', 1, 0);
    assert.equal(result, "Error");
  });
  it('test the DIVISION for decimal number', () => {
  const result = calculateNumber('DIVIDE', 1.55, 0);
  assert.equal(result, "Error");
  });
  it('test the DIVISION for decimal number', () => {
    const result = calculateNumber('DIVIDE', 1.2, 3.7);
    assert.equal(result, 0.25);
  });
  it('test the DIVISION for decimal number', () => {
    const result = calculateNumber('DIVIDE', 1.5, 3.7);
    assert.equal(result, 0.5);
  });
  it('test the DIVISION for decimal number', () => {
    const result = calculateNumber('DIVIDE', 2.49, 3.49);
    assert.equal(result, 0.6666666666666666);
  });
  it('test the DIVISION for decimal number', () => {
    const result = calculateNumber('DIVIDE', 2.0, 3.0);
    assert.equal(result, 0.6666666666666666);
  });
  it('test the DIVISION for decimal number', () => {
    const result = calculateNumber('DIVIDE', 2.0, 2.59999);
    assert.equal(result, 0.6666666666666666);
  });
});
