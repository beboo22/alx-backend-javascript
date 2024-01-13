import { uploadPhoto, createUser } from './utils';
export default function handleProfileSignup() {
  const mypro = new Promise((resolve, reject) => {
    const resdata = uploadPhoto();
    const resdata2 = createUser();
    if (resdata) {
      return resolve(resdata[0], resdata2);
    }
    return 'erro';
  }, 100);
  return mypro;
}
