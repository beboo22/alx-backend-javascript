/**
 *
 *
 *
 */
export default function getListStudentIds(std) {
  if (std instanceof Array) {
    return std.map((stud) => stud.id);
  }
  return [];
}
