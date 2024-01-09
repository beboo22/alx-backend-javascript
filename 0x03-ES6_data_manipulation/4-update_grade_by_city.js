/**
 *
 *
 *
 */
export default function updateStudentGradeByCity(std, city, newGrades) {
  const defualtgard = { grade: 'N/A' };
  if (std instanceof Array) {
    return std.filter((stud) => stud.location === city).map((stud) => [{
      id: stud.id,
      firstName: stud.firstName,
      grade: (newGrades.filter((ng) => ng.studentId === stud.id)
        .pop() || defualtgard).grade,
    }]);
  }
  return [];
}
