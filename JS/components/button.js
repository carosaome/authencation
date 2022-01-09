// import LoginScreen from "../comtainers/Login";

class Button {
    btn;
    constructor(text, type,classList, callBack) {
        this.btn = document.createElement('button')
        this.btn.innerText = text
        this.btn.type = type
        this.btn.classList.add(...classList)
        if (callBack) {
            this.btn.addEventListener('click', callBack)
        }
    }

    render() {

        return this.btn
    }




}

export default Button