class PhoneApp{
  constructor(){
    this.database = [];
  }

  addUser (user) {
    let currentUser = {};
    currentUser.id = this.database.length + 1;
    currentUser.avatar = user.avatar || "avatar-2"
    if (user.name) {
      currentUser.name = user.name;
    }
    if (user.phone) {
      if (!this.checkPhoneNumber(user.phone)) {
        currentUser.phone = user.phone;
      } else {
        console.log(
          "не удалось сохранить номер телефона, Телефон должен состоять только из цифр"
        );
      }
    }
    if (user.homePhone) {
      if (!this.checkPhoneNumber(user.homePhone)) {
        currentUser.homePhone = user.homePhone;
      } else {
        console.log(
          "не удалось сохранить номер телефона, Телефон должен состоять только из цифр"
        );
      }
    }
    this.database.push(currentUser);
  };

  checkPhoneNumber(phone){
    isNaN(+phone)
  };


  deleteUser(id) {
    this.database.filter((elem, index) => {
      if (elem.id == id) {
        this.database.splice(index, 1);
      }
    });
  };

  searchUserByName(name) {
    return this.database.filter(function(elem) {
      if (elem.name == name) {
        return elem;
      }
    });
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
        //from small value to big value
        if (direction == "up") {
          return a[param] < b[param];
        }
        //from big value to small value
        if (direction == "down") {
          return a[param] > b[param];
        }
      //default  
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
    this.avatar = options.avatar
  }
}

let vasya = new User({
  name: "Vasya",
  phone: "123456789",
  homePhone: "11111"
})
let petja = new User({ name: "Petja", phone: "123456798" })
let brigitte = new User({ name: "Brigitte", phone: "123457689", avatar:"girl-1" })
let tracer = new User({ name: "Tracer", phone: "123546789" })
let anduin = new User({
  name: "Anduin",
  phone: "113456789",
  homePhone: "535353"
})
let torgrim = new User({ name: "Torgrim", phone: "321456789", avatar:"man-2" })
let anduin2 = new User({
  name: "Anduin",
  phone: "113451189",
  homePhone: "222222"
})
let user = new User({
  name: "User",
  phone: "113451189",
  homePhone: "222222"
})
let name = new User({
  name: "Name",
  phone: "113451189",
  homePhone: "222222"
})
let someUaser = new User({
  name: "someUaser",
  phone: "113451189",
  homePhone: "222222"
})
let blabla = new User({
  name: "blabla",
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
myPhoneApp.addUser(user);
myPhoneApp.addUser(name);
myPhoneApp.addUser(someUaser);
myPhoneApp.addUser(blabla);

console.log(myPhoneApp)

console.log(myPhoneApp.searchUserByName('Anduin'));