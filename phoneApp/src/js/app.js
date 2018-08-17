class App{
    constructor(){
        this.state = "contactsList"
        this.model = new Model(this.state)
        this.view = new View(this.state)
        this.controller = new Controller(this.model,this.view)
    }
    render(){
        this.view.createStructure(this.state)
    }
    
    setState(state){
        this.state = state
        console.log(this.state)
    }
}

let app = new App()







