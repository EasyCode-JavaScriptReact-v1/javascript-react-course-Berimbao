class Controller{
    constructor(model, view){
        this.state = "contactsList"
        this.model = model
        this.view = view
        this.navigation = {
            contactsList: document.getElementById("menu_contacts_list"),
            keypad: document.getElementById("menu_keypad"),
            contact: document.getElementById("menu_contact"),
            user: document.getElementById("menu_user"),
            addUser: document.getElementById("menu_add_user"),
        }

        Object.keys(this.navigation).forEach((elem) => {           
            this.navigation[elem].addEventListener("click",function(e){
                e.preventDefault()
                this.state = elem
                app.setState(this.state)
            })           
        })
    }  

    getState(){
        return this.state;
    }
    


    
}