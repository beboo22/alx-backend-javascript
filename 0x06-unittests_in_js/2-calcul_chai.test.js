const  {expect}  = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('test function calculateNumber in 1-calcul', () => {
  describe('type == "SUM"', () => {
    it('test for real number', () => {
      const result = calculateNumber('SUM', 3, 2);
      expect(result).to.equal(5);
    });
    it('test for real and decimal number', () => {
      const result = calculateNumber('SUM', 1, 3.7);
      expect(result).to.equal(5);
    });
    it('test for decimal number', () => {
      const result = calculateNumber('SUM', 1.2, 3.7);
      expect(result).to.equal(5);
    });
    it('test for decimal number', () => {
      const result = calculateNumber('SUM', 1.5, 3.7);
      expect(result).to.equal(6);
    });
    it('test for decimal number', () => {
      const result = calculateNumber('SUM', 2.49, 3.49);
      expect(result).to.equal(5);
    });
    it('test for decimal number', () => {
      const result = calculateNumber('SUM', 2.0, 3.0);
      expect(result).to.equal(5);
    });
    it('test for decimal number', () => {
      const result = calculateNumber('SUM', 2.0, 2.59999);
      expect(result).to.equal(5);
    });
  });
  // ========================================================================================
  describe('type == "SUBTRACT"', () => {
    it('test for real number with (-)ve result', () => {
      const result = calculateNumber('SUBTRACT', 2, 3);
      expect(result).to.equal(-1);
    });
    it('test for real and decimal number with (-)ve result', () => {
      const result = calculateNumber('SUBTRACT', 1, 3.7);
      expect(result).to.equal(-3);
    });
    it('test for decimal nunber', () => {
      const result = calculateNumber('SUBTRACT', 1.2, 3.7);
      expect(result).to.equal(-3);
    });
    it('test for decimal number with (-)ve result', () => {
      const result = calculateNumber('SUBTRACT', 1.5, 3.7);
      expect(result).to.equal(-2);
    });
    it('test for decimal number with (-)ve result', () => {
      const result = calculateNumber('SUBTRACT', 2.49, 3.49);
      expect(result).to.equal(-1);
    });
    it('test for decimal number with (-)ve result', () => {
      const result = calculateNumber('SUBTRACT', 2.0, 3.0);
      expect(result).to.equal(-1);
    });
    it('test for decimal number with (-)ve result', () => {
      const result = calculateNumber('SUBTRACT', 2.0, 2.59999);
      expect(result).to.equal(-1);
    });
    // ========================================================================================
    it('test for real number with', () => {
      const result = calculateNumber('SUBTRACT', 3, 2);
      expect(result).to.equal(1);
    });
    it('test for real and decimal number with (+)ve result', () => {
      const result = calculateNumber('SUBTRACT', 3.7, 1);
      expect(result).to.equal(3);
    });
    it('test for decimal nunber', () => {
      const result = calculateNumber('SUBTRACT', 3.7, 1.2);
      expect(result).to.equal(3);
    });
    it('test for decimal number with (+)ve result', () => {
      const result = calculateNumber('SUBTRACT', 3.7, 1.5);
      expect(result).to.equal(2);
    });
    it('test for decimal number with (+)ve result', () => {
      const result = calculateNumber('SUBTRACT', 3.49, 2.49);
      expect(result).to.equal(1);
    });
    it('test for decimal number with (+)ve result', () => {
      const result = calculateNumber('SUBTRACT', 3.0, 2.0);
      expect(result).to.equal(1);
    });
    it('test for decimal number with (+)ve result', () => {
      const result = calculateNumber('SUBTRACT', 2.59999, 2.0);
      expect(result).to.equal(1);
    });
  });
  // ========================================================================================
  describe('type == "DIVISION"', () => {
    it('test for real number', () => {
      const result = calculateNumber('DIVIDE', 3, 2);
      expect(result).to.equal(1.5);
    });
    it('test for real number', () => {
      const result = calculateNumber('DIVIDE', 3, 0);
      expect(result).to.equal('Error');
    });
    it('test for real and decimal number', () => {
      const result = calculateNumber('DIVIDE', 1, 3.7);
      expect(result).to.equal(0.25);
    });
    it('test for real and decimal number', () => {
      const result = calculateNumber('DIVIDE', 1, 0);
      expect(result).to.equal('Error');
    });
    it('test for decimal number', () => {
      const result = calculateNumber('DIVIDE', 1.55, 0);
      expect(result).to.equal('Error');
    });
    it('test for decimal number', () => {
      const result = calculateNumber('DIVIDE', 1.2, 3.7);
      expect(result).to.equal(0.25);
    });
    it('test for decimal number', () => {
      const result = calculateNumber('DIVIDE', 1.5, 3.7);
      expect(result).to.equal(0.5);
    });
    it('test for decimal number', () => {
      const result = calculateNumber('DIVIDE', 2.49, 3.49);
      expect(result).to.equal(0.6666666666666666);
    });
    it('test for decimal number', () => {
      const result = calculateNumber('DIVIDE', 2.0, 3.0);
      expect(result).to.equal(0.6666666666666666);
    });
    it('test for decimal number', () => {
      const result = calculateNumber('DIVIDE', 2.0, 2.59999);
      expect(result).to.equal(0.6666666666666666);
    });
  });
});
