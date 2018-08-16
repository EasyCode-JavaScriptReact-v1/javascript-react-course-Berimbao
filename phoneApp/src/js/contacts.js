class Contacts{
  constructor(){
    this.baseBlock = document.querySelector(".main")
		this.body = document.body;
  }
  
  
  render(users){	
	document.body.innerHTML =`
		<form class="form-inline search-form">
			<div class="form-group">
				<label class="sr-only" for="search">Search</label>
				<input type="text" class="form-control" id= "search" placeholder="Search">
			</div>
		</form>
		<table class="table table-hover contacts">
			<thead>
				<tr>
					<th>Name</th>
					<th>Last name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				${createUsersListView(users)}
			</tbody>
		</table>
	`
  }
  
  createUsersListView(users){
		return `${users.map(elem => {
			createUserTR(elem)
		})}`
	}

  
  createUsersList(users){
	let tableBlock = document.querySelector(".contact-table");
    // users.forEach(elem => {
    //   tableBlock.innerHTML += this.createUserTR(elem)
    // })
  }
  
  createUserTR(user){	
		return `
			<tr>
				<td>${user.name.split(' ')[0]}</td>
				<td>${user.name.split(' ')[1]}</td>
				<td>${user.email}</td>
			</tr>
	`
  }
   renderUsersList(elem){	
    this.tableBlock.innerHTML += elem
	}
}

let contacts = new Contacts()

