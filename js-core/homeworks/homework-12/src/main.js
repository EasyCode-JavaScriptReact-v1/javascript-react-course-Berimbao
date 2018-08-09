/*
 * TASK ! ! !
 * Сделайте пожалуйста с теми навыками которые у вас есть ТЕЛЕФОННЫЙ СПРАВОЧНИК
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * при вызове listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */

function Http() {
  this.ctx = {  
    req: {
      PORT:0,
      url:''
    },
    res: {
      status:0,
      message:'msg',
      header:{
        type: "application/json"
      }
    }
  }
  this.next = () => console.log("next")
}
Http.prototype.createServer = function(fn) {
  this.function = function(){
    return fn(this.ctx, this.next)
  }
  return this
};

Http.prototype.listen = function(PORT, host) {
  console.log(`Server running on https://${host}:${PORT}`);
  this.function();
  return this
};

const server = new Http()
  .createServer(function(ctx, next) {
    console.log(ctx,next());
  })
  .listen(3000, "localhost");

// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплата, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

function Human(options) {
  this.name = options.name;
  this.age = options.age;
  this.sex = options.sex;
  this.heigth = options.heigth;
  this.weigth = options.weigth;
}

function Worker(...options) {
  let obj = options.reduce(elem => elem);
  Human.apply(this, options);
  this.company = obj.company;
  this.salary = obj.salary;
  this.work = () => console.log("job's done!");
}

function Student(...options) {
  let obj = options.reduce(elem => elem);
  Human.apply(this, options);
  this.institute = options.institute;
  this.grant = options.grant;
  this.watchFilms = () => console.log("Yahooo!");
}

let worker = new Worker({
  name: "Joe",
  age: 32,
  sex: "male",
  heigth: 180,
  weigth: 95,
  salary: 2000,
  company: "Some Company"
});
let student = new Student({
  name: "Mike",
  age: 19,
  sex: "male",
  heigth: 183,
  weigth: 75,
  institute: "KhPI",
  grant: 500
});

console.log(worker);
console.log(student);

// @SUPER

/*
 *
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
 *
*/
