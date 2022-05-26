function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  let excluded;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = mark;
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...points) {
  if (this.marks === undefined) {
    this.marks = points;
  } else {
    this.marks.push(...points);
  }
}

Student.prototype.getAverage = function () {
  console.log(this);
  
  let initialValue = 0;
  let sumAllValues = this.marks.reduce((previousValue, currentValue) =>
    previousValue + currentValue, initialValue);
  return sumAllValues / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}


// let generalMark = 0;
// for (index = 0; index < this.marks.length; index++) {
//   generalMark = generalMark + this.marks[index];
// }
// return generalMark / this.marks.length;

// let initialValue = 0;
//   let sumAllValues = this.marks.reduce((previousValue, currentValue) =>
//     previousValue + currentValue, initialValue);
// return sumAllValues/this.marks.length;


// let student2 = new Student("Masha", "Female", 30);
// student2.setSubject("Geography")
// student2.addMark(4);
// student2.addMark(3);
// student2.addMark(5);
// student2.addMarks(2,3,3);
// // console.log(student2.getAverage());

// console.log(student2);


let student1 = new Student("Misha", "Male", 50);
student1.setSubject("Biology");
student1.addMarks(2, 3, 2);
// student1.exclude('low grades');
console.log(student1.getAverage());

console.log(student1);

