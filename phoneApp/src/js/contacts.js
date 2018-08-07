class Contacts{
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
		console.log(users)
	this.createStructure();
	this.createUsersList(users);
  }
  
  createUsersList(users){
	let tableBlock = document.querySelector(".contact-table");
    // users.forEach(elem => {
    //   tableBlock.innerHTML += this.createUserTR(elem)
    // })
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

let contacts = new Contacts()

