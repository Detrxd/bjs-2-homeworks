class PrintEditionItem {

    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.__state = state;
        this.type = type;
    }


    fix() {
        if (this.state < 100) {
            this.state = 100;
            return this.state;
        }
    }

    set state(value) {
        if (value === 0) {
            this.__state = 0
        }
        if (value === 100) {
            this.__state = 100
        }
    }

    get state() {
        return this.__state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
        super(name, releaseDate, pagesCount, state, type)
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
        super(name, releaseDate, pagesCount, state, type)
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, author, releaseDate, pagesCount, state = 100, type = "novel") {
        super(name, author, releaseDate, pagesCount, state, type)

    }
}

class FantasticBook extends Book {
    constructor(name, author, releaseDate, pagesCount, state = 100, type = "fantastic") {
        super(name, author, releaseDate, pagesCount, state, type)

    }
}

class DetectiveBook extends Book {
    constructor(name, author, releaseDate, pagesCount, state = 100, type = "detective") {
        super(name, author, releaseDate, pagesCount, state, type)

    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy = function (key, value) {
        return this.books.find((book) => value === book[key]) || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);

        if (book) {
            let filteredBooks = this.books.filter((book) => bookName !== book.name);
            console.log(this.books)
            this.books = filteredBooks;
            return book

        } else {
            return null
        }
    }
}

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
      this.marks = [mark];
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
  
  
