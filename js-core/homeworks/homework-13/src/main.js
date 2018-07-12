/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */
class Human {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.sex = options.sex;
    this.heigth = options.heigth;
    this.weigth = options.weigth;
  }
}

class Worker extends Human {
  constructor(options) {
    super(options);
    this.workPlace = options.workPlace;
    this.salary = options.salary;
    this.work = () => console.log(`Job's done!`);
  }
}

class Student extends Human {
  constructor(options) {
    super(options);
    this.school = options.school;
    this.grant = options.grant;
    this.watchFilms = () => console.log(`Nice one!`);
  }
}

let worker = new Worker({
  name: "Ork Slave",
  age: 30,
  sex: "male",
  heigth: 180,
  weigth: 100,
  workPlace: "forest",
  salary: "food"
});
worker.work()

let student = new Student({
  name: "Ork Student",
  age: 20,
  sex: "female",
  heigth: 170,
  weigth: 70,
  school: "Orgrimar Higth School",
  grant: "food"
});
student.watchFilms()

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
  constructor() {
    this.interval = 0;
    this.query = function() {
      let counter = 5;
      if (this.interval > 0) {
        clearInterval(this.interval);
      }
      let interval = setInterval(() => {
        this.interval = interval;
        console.log(counter);
        counter--;
        if (counter == 0) {
          clearInterval(interval);
          console.log("The web server is down");
        }
      }, 1000);
    };
  }
}

const dataBase = new DataBase();
dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();

// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')
