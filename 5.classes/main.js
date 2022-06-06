const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook(  "Артур Конан Дойл",  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",  2019, 1008 ));
library.addBook(new FantasticBook(  "Аркадий и Борис Стругацкие",  "Пикник на обочине",  1972,  168 ));
library.addBook(new NovelBook(  "Герберт Уэллс",  "Машина времени",  1895,  138 ));
library.addBook(new Magazine(  "Мурзилка",  1924,  60 ));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");

console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

describe("Домашнее задание к занятию 4 «Объекты»", () => {
    describe("Задача №1 Инкапсуляция студента", () => {
      let student1 = new Student("Tony", "male", 37);
      student1.setSubject("Algebra");
      student1.addMark(5);
      student1.addMark(4); 
      student1.addMark(5);
      
      let student2 = new Student("Buzz", "female", 35);
      student2.setSubject("Geometry");
      student2.addMarks(2,3,2);
  
      it("Установка предмета работает корректно", () => {
        expect(student1.subject).toEqual("Algebra");
        expect(student2.subject).toEqual("Geometry");
      });
  
      it("Добавление оценок addMark работает корректно", () => {
        expect(student1.marks).toEqual([5, 4, 5]);
      });
  
      it("Добавление группы оценок addMarks работает корректно", () => {
        expect(student2.marks).toEqual([2, 3, 2]);
      });
  
      it("Вычисление среднего работает корректно", () => {
        expect(student1.getAverage()).toEqual(14/3);
        expect(student2.getAverage()).toEqual(7/3);
      });
  
      it("Отчисление студента работает корректно", () => {
        student2.exclude('low grades')
        expect(student2.excluded).toEqual('low grades');
      });
  
    });
  });
  