/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь(админ)
 - Гость
 - База данных
 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 * */

function Database() {
  this.database = [];
}

Database.prototype.addUser = function(user) {
  this.database.push(user);
};

function BaseUser(user) {
  this.name = user.name;
}

function User() {
  this.adminEmail = "admin@database.ua";
}

User.prototype = Object.create(BaseUser);

function Admin() {
  this.databasePassword = "qwerty";
}
Admin.prototype = Object.create(BaseUser);

function Guest() {}
Admin.prototype = Object.create(BaseUser);

Guest.prototype.register = function() {
  database.addUser(this);
};



let database = new Database();
let user = new User("Uaser");
let admin = new Admin("Admin");
let guest = new Guest("Guest");

database.addUser(user);
database.addUser(admin);
guest.register();
console.log(guest);
console.log(user);
console.log(admin);
console.log(database);
