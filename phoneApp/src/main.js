class PhoneApp{
  constructor(){
    this.database = [];
  }
  addUser (user) {
    let currentUser = {};
    currentUser.id = this.database.length + 1;
    currentUser.avatar = user.avatar || "avatar-2"
	currentUser.homePhone = user.homePhone;
	currentUser.name = user.name;
	currentUser.phone = user.phone;	
	this.database.push(currentUser);
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

class App{
  constructor(){
    this.baseBlock = document.querySelector(".main")
	this.body = document.body;
  }
  
 createHeader(){
	return `
		<div class="app-header">
			My Phone App
		</div>
	`
  }
  createFooter(){
	 return `
		<div class="app-footer">
			<div></div>
		</div>
	`
  }
  createContentBlock(){
	return `<div class="app-content">
        <table class="contact-table" cellspacing="0" cellpadding="0">                      
        </table>       
    </div>`
  }
  createStructure(){	
	document.body.innerHTML =`
	<div class="main">
		${this.createHeader()}
		${this.createContentBlock()}
		${this.createFooter()}
	</div>
	`
  }
  
  render(users){
	this.createStructure();
	this.createUsersList(users);
	console.log(this.tableBlock)
  }
  
  createUsersList(users){
	let tableBlock = document.querySelector(".contact-table");
    users.database.forEach(elem => {
      tableBlock.innerHTML += this.createUserTR(elem)
    })
  }
  
  createUserTR(user){	
	return `
		<tr class="borderdered" onclick="window.location.href = 'contact.html'">
			<td class="app-contact-avatar">
				<div class="round-avatar">
					<img src="img/${user.avatar}.png">
				</div>
			</td>
			<td class="app-contact-name">
				<p>${user.name}</p>
				<p>${user.phone}</p>
			</td>
			<td class="app-contact-buttons">
				<a href="contact.html?do=edit" class="icon-link">
					<i class="far fa-edit"></i>
				</a>
			</td>
		</tr>
	`
  }
   renderUsersList(elem){	
    this.tableBlock.innerHTML += elem
  }


}

let app = new App()

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


console.log(app.createHeader())
console.log(app.createContentBlock())
console.log(app.createFooter())

app.render(myPhoneApp)


