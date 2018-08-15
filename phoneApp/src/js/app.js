class App(){
    constructor(model,view,controller){
        this.state = "contacts"
        this.model = new Model(state)
        this.view = new View(state)
        this.controller = new Controller(model,view)
    }
}

