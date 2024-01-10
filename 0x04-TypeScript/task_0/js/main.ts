export interface Student  {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1 : Student={
  firstName: "beboo",
  lastName: "TAREK",
  age: "19",
  location:"ELSHROUK"
};
const student2 : Student={
  firstName: "TWEETY",
  lastName: "SABRY",
  age: "19",
  location:"October"
};
const studentsList : Student [] = [student1, student2];
