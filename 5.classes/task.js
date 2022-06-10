class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }


    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this.__state = 100;
        } else {
            this.__state = value;
        }
    }

    get state() {
        return this.__state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author;
        this.type = "book"
    }
}

class NovelBook extends Book {
    constructor(name, author, releaseDate, pagesCount) {
        super(name, author, releaseDate, pagesCount)
        this.type = "novel"

    }
}

class FantasticBook extends Book {
    constructor(name, author, releaseDate, pagesCount) {
        super(name, author, releaseDate, pagesCount)
        this.type = "fantastic"
    }
}

class DetectiveBook extends Book {
    constructor(name, author, releaseDate, pagesCount) {
        super(name, author, releaseDate, pagesCount)
        this.type = "detective"
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

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {}

    }

    addMark(mark, markSubject) {
        if ((mark < 0) || (mark > 5)) {
            throw new Error("Ошибка, оценка должна быть числом от 1 до 5")
        }
        if (!this.marks[markSubject]) {
            this.marks[markSubject] = [];
        }
        this.marks[markSubject].push(mark);
    }

    getAverage() {
        let markSum = 0;
        let markLenght = 0;

        for (const subject in this.marks) {
            this.marks[subject]
            markLenght += this.marks[subject].length
            const totalSum = 0;
            markSum += this.marks[subject].reduce((acc, curr) => acc + curr, 0)
        }
        return markSum / markLenght;
    }

    getAverageBySubject(subject) {

        if (!this.marks[subject]) {
            throw new Error('Ошибка! Нет токого предмета')
        }
        let sumMarks = this.marks[subject].reduce((acc, curr) => acc + curr, 0)
        return sumMarks / this.marks[subject].length;

    }

    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }

}

const student = new Student("Олег Никифоров")
student.addMark(5, "algebra")
student.addMark(3, "algebra")
student.addMark(4, "geometry")
console.log(student);

console.log(student.getAverage());
console.log(student.getAverageBySubject("algebra"));
