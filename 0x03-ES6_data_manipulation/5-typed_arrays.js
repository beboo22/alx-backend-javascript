/**
 *
 *
 *
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range.');
  }
  const buf = new Int8Array(new ArrayBuffer(length));
  buf[position] = value;
  return new DataView(buf.buffer);
}
