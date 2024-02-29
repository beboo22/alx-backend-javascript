const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = Utils.calculateNumber(totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
};

module.exports = calculateNumber;
