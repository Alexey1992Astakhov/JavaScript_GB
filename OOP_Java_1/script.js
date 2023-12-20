// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    #title;
    #author;
    #pages;

    constructor(title, author, pages) {
        this.#title = title;
        this.#author = author;
        this.#pages = pages;
    }

    dispayInfo() {
        console.log(` Название книги: ${this.#title}\n Автор: ${this.#author}\n Кол-во страниц: ${this.#pages}`);
    }
}
const book = new Book('Оно', 'Стивен Кинг', 500);
book.dispayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    #name;
    #age;
    #grade;

    constructor(name, age, grade){
        this.#name = name;
        this.#age = age;
        this.#grade = grade;
    }

    dispayInfo() {
        console.log(`Информация о студенте:\nИмя: ${this.#name}\nВозраст: ${this.#age} лет\nКласс: ${this.#grade} `);
    }
}

const student = new Student("Андрей Астахов", 8, "2Е");
const student1 = new Student("Кирилл Астахов", 6, "1А")
student.dispayInfo();
student1.dispayInfo();

