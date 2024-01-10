export interface Teacher  {
  firstName: string;
  lastName: string;
  fullTimeEmployee:boolean;
  yearsOfExperience?: number;
  
  location: string;
  contract:boolean;
}
export interface Directors extends Teacher  {
  numberOfReports: number;
}
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}
class StudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName:string, lastName:string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  workOnHomework(){
    return 'Currently working';
  }
  displayName(){
    return this._firstName;
  }
}
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  yearsOfExperience: 0
};
const student2 : Student={
  firstName: "TWEETY",
  lastName: "SABRY",
  age: "19",
  location:"October"
};
const studentsList : Student [] = [student1, student2];
