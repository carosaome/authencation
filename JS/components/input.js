class Input{
    containerInput;
    container;
    label;
    input;
    error;

    constructor(content, type, name,id){
        this.container = document.createElement('div')
        this.container.classList.add("row", 'd-flex', 'flex-wrap', 'mt-4');

        this.containerInput = document.createElement('div');
        this.containerInput.classList.add("col-8");

        this.label = document.createElement('label')
        this.label.classList.add('col-4')
        this.label.innerText = content;

        this.input = document.createElement('input')
        this.input.classList.add("form-control");
        this.input.type = type;
        this.input.id = id;
        
        this.input.name = name;

        this.error = document.createElement('div')
    
        this.error.classList.add('err', "mt-2", "d-none");
}

    setError(message) {
        this.error.innerText = message;
        this.error.classList.remove('d-none')
        this.error.classList.add('d-block')
    }

    removeErr(message){
        this.error.innerText ='';
        
    }


       render(){
           this.containerInput.append(this.input, this.error)
            this.container.append(this.label, this.containerInput)
            return this.container
        }

    


}

export default Input