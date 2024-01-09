/**
 *
 *
 *
 */
export default function getStudentIdsSum(std) {
  const sm = std.reduce((acc, cur) => acc + cur.id);
  return sm;
}
