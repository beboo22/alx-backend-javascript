/**
 *
 *
 *
 */
export default function getStudentIdsSum(std) {
  const sm = std.reduce((acc, cur) => acc + cur.id, 0);
  return sm;
}
