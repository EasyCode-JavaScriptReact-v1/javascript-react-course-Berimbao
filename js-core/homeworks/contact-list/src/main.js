function PhoneApp() {
  this.database = [];
}

PhoneApp.prototype.addUser = function(id, options) {
  let user = {
    id: id
  };
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

PhoneApp.prototype.checkPhoneNumber = phone => isNaN(+phone);

PhoneApp.prototype.checkAndFormatPhoneNumber = phone => {
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

PhoneApp.prototype.deleteUser = function(id) {
  this.database.forEach((elem, index) => {
    if (elem.id == id) {
      this.database.splice(index, 1);
    }
  });
  this.database.splice();
};

PhoneApp.prototype.searchUserByName = function(name) {
  return this.database.reduce(function(newElem, elem) {
    if (elem.name == name) {
      newElem.push(elem);
    }
    return newElem;
  }, []);
};

PhoneApp.prototype.editUser = function(id, options) {
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

PhoneApp.prototype.filterUser = function(param) {
  return this.database.filter(elem => {
    if (elem[param]) {
      return elem;
    }
  });
};

PhoneApp.prototype.sortUser = function(param, direction) {
  return this.database.sort((a, b) => {
    if (direction) {
      if (direction == "big") {
        return a[param] > b[param];
      }
      if (direction == "small") return a[param] < b[param];
    } else {
      return a[param] > b[param];
    }
  });
};

const myPhoneApp = new PhoneApp();
myPhoneApp.addUser(1, {
  name: "Vasya",
  phone: "123456789",
  homePhone: "11111"
});
myPhoneApp.addUser(2, { name: "Petja", phone: "123456798" });
myPhoneApp.addUser(3, { name: "Brigitte", phone: "123457689" });
myPhoneApp.addUser(4, { name: "Tracer", phone: "123546789" });
myPhoneApp.addUser(5, {
  name: "Anduin",
  phone: "113456789",
  homePhone: "535353a"
});
myPhoneApp.addUser(6, { name: "Torgrim", phone: "321456789" });
myPhoneApp.addUser(7, {
  name: "Anduin",
  phone: "113451189",
  homePhone: "222222"
});

console.log(myPhoneApp.searchUserByName("Anduin"));
myPhoneApp.editUser(2, { name: "Voljin" });
console.log(myPhoneApp.filterUser("homePhone"));
console.log(myPhoneApp.sortUser("name", "big"));
console.log(myPhoneApp.checkAndFormatPhoneNumber("0993378130"));
