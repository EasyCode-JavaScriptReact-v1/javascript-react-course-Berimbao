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
}
let app = new App();
app.createStructure()