export default function getResponseFromAPI(success) {
  const mypro = new Promise((resolve, reject) => {
    const resdata = { status: 200, body: 'Success' };
    if (success) {
      return resolve(resdata);
    }
    return reject(new Error('The fake API is not working currently'));
  }, 100);
  return mypro;
}
