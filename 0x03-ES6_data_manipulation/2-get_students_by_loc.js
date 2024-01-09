/**
 *
 *
 *
 */
export default function getStudentsByLocation(std, city) {
  if (std instanceof Array) {
    return std.filter((stud) => stud.location === city);
  }
  return [];
}
