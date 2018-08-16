class App{
    constructor(){
        this.state = "contacts"
        this.model = new Model(this.state)
        this.view = new View(this.state)
        this.controller = new Controller(this.model,this.view)
    }
    render(){
        this.view.createStructure()
    }
}

let app = new App()
app.render()




