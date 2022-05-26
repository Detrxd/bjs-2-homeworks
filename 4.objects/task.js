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


let student1 = new Student("Masha", "Female", 30);
student1.setSubject("Geography")
student1.addMark(4);
student1.addMark(3);
student1.addMark(5);
student1.addMarks(2, 3, 3);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student("Misha", "Male", 40);
student2.setSubject("Biology")
student2.addMarks(2, 3, 3);
student2.exclude('low grades');
console.log(student2);

