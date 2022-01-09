class confirnEmail{
    icon;

    container;
    img;

    h2;
    p;
    constructor(){
        this.container = document.createElement('div')
        this.container.classList.add('confirnEmail')
        this.img = document.createElement('img')
        this.img.style.width ='200px'
        this.img.src ="../assets/icon.svg"
        
        
        this.h2 = document.createElement('h2')
        this.h2.innerText = 'Check your mail'
        this.h2.classList.add('title-confirn-email')

        this.p = document.createElement('p')
        this.p.style.textAlign
        this.p.innerText ='Your account has been succesfully registered. To complete the process please check your email for a validation request.'


    }
render=()=>{
    this.container.append(this.img, this.h2, this.p)
    return this.container
}

}
export default confirnEmail