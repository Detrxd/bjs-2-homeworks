class PrintEditionItem {
    constructor(props) {
        this.name = props.name;
        this.releaseDate = props.releaseDate;
        this.pagesCount = props.pagesCount;
        this.state = props.state || 100;
        this.type = props.type || null;
    }
    fix = function () {
        this.state = this.state * 1.5;
    }

    set repairItem(value) {
        if (value === 0) {
            this.state = 0
        } else if (value > 100) {
            this.state = 100
        } else {
            this.state = this.state;
        }
    }

    get itemState() {
        return `${this.state}`
    }
}

const sherlock = new PrintEditionItem({
    name:"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    releaseDate: 2019,
    pagesCount: 1008
}
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
        super({ name, releaseDate, pagesCount, state, type })
    }
}

class Book extends PrintEditionItem {
    constructor(name, author, releaseDate, pagesCount, state = 100, type = "Book") {
        super({ name, releaseDate, pagesCount, state, type })
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, author, releaseDate, pagesCount, state = 100, type = "novel") {
        super({ name, author, releaseDate, pagesCount, state, type })

    }
}

class FantasticBook extends Book {
    constructor(name, author, releaseDate, pagesCount, state = 100, type = "fantastic") {
        super({ name, author, releaseDate, pagesCount, state, type })

    }
}

class DetectiveBook extends Book {
    constructor(name, author, releaseDate, pagesCount, state = 100, type = "detective") {
        super({ name, author, releaseDate, pagesCount, state, type })

    }
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

// console.log(picknick.author);
// picknick.state = 10;
// console.log(picknick.state);
// console.log(picknick);
// picknick.fix();
// console.log(picknick.state)

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

    findBookBy = function (type, value) {
        return this.books.find((book) => value === book[type]) || null;
    }

    giveBookByName(bookName){
        if (this.findBookBy)
    }

    // giveBookByName = function (bookName) {
    //     if (bookName === book.name) {
    //         delete books[bookName]
    //         return;
    //     } else {
    //         return console.log(null);
    //     }

    // }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);

library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3