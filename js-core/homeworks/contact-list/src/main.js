class PhoneApp{
  constructor(){
    this.database = [];
  }

  addUser (options) {
    let user = {};
    user.id = this.database.length + 1;
  
    if (options.name) {
      user.name = options.name;
    }
    if (options.phone) {
      if (!this.checkPhoneNumber(options.phone)) {
        user.phone = options.phone;
      } else {
        console.log(
          "не удалось сохранить номер телефона, Телефон должен состоять только из цифр"
        );
      }
    }
    if (options.homePhone) {
      if (!this.checkPhoneNumber(options.homePhone)) {
        user.homePhone = options.homePhone;
      } else {
        console.log(
          "не удалось сохранить номер телефона, Телефон должен состоять только из цифр"
        );
      }
    }
    this.database.push(user);
  };
  checkPhoneNumber(phone){isNaN(+phone)};

  checkAndFormatPhoneNumber(phone) {
    if (!isNaN(+phone)) {
      let phoneCode = phone
        .split("")
        .splice(0, 3)
        .join("");
      let resultPhone =
        "(" +
        phoneCode +
        ") " +
        phone.slice(3, 5) +
        "-" +
        phone.slice(5, 7) +
        "-" +
        phone.slice(7);
      return resultPhone;
    }
  };

  deleteUser(id) {
    this.database.forEach((elem, index) => {
      if (elem.id == id) {
        this.database.splice(index, 1);
      }
    });
    this.database.splice();
  };
  searchUserByName(name) {
    return this.database.reduce(function(newElem, elem) {
      if (elem.name == name) {
        newElem.push(elem);
      }
      return newElem;
    }, []);
  };
  editUser(id, options) {
    this.database.map(elem => {
      if (elem.id == id) {
        if (options.name) {
          elem.name = options.name;
        }
        if (options.phone) {
          elem.phone = options.phone;
        }
        if (options.homePhone) {
          elem.homePhone = options.homePhone;
        }
      }
    });
  };
  filterUser(param) {
    return this.database.filter(elem => {
      if (elem[param]) {
        return elem;
      }
    });
  };
  sortUser(param, direction) {
    return this.database.sort((a, b) => {
      if (direction) {
        if (direction == "big") {
          return a[param] < b[param];
        }
        if (direction == "small") {
          return a[param] > b[param];
        }
      } else {
        return a.id > b.id;
      }
    });
  };
}

class User{
  constructor(options){
    this.name = options.name
    this.phone = options.phone
    this.homePhone = options.homePhone
  }
}

let vasya = new User({
  name: "Vasya",
  phone: "123456789",
  homePhone: "11111"
})
let petja = new User({ name: "Petja", phone: "123456798" })
let brigitte = new User({ name: "Brigitte", phone: "123457689" })
let tracer = new User({ name: "Tracer", phone: "123546789" })
let anduin = new User({
  name: "Anduin",
  phone: "113456789",
  homePhone: "535353"
})
let torgrim = new User({ name: "Torgrim", phone: "321456789" })
let anduin2 = new User({
  name: "Anduin",
  phone: "113451189",
  homePhone: "222222"
})

const myPhoneApp = new PhoneApp();
myPhoneApp.addUser(vasya);
myPhoneApp.addUser(petja);
myPhoneApp.addUser(brigitte);
myPhoneApp.addUser(tracer);
myPhoneApp.addUser(anduin);
myPhoneApp.addUser(torgrim);
myPhoneApp.addUser(anduin2);

console.log(myPhoneApp);
console.log(myPhoneApp.searchUserByName("Anduin"));
myPhoneApp.editUser(2, { name: "Voljin" });
myPhoneApp.editUser(4, { homePhone: "159357" });
console.log(myPhoneApp.filterUser("homePhone"));
console.log(myPhoneApp.sortUser("phone", "big"));
// console.log(myPhoneApp.checkAndFormatPhoneNumber("0993378130"));
