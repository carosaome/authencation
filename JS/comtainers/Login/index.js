import Button from "../../components/button.js";
import Input from "../../components/input.js";
import { checkEmail, checkPassWord } from "../../common/validator.js"
import RegisterScreen from "../Register/index.js";
import App from "../../index.js";


class LoginScreen {
    email;
    password;
    container;
    link;

    imgCover;
    formLogin;
    btnSubmit;
    titleScreen;
    constructor() {
        this.container = document.createElement('div')
        this.container.classList.add('login-form', "d-flex");

        this.imgCover = document.createElement('div');
        this.imgCover.classList.add("img-cover")

        this.formLogin = document.createElement('form');
        this.formLogin.classList.add("form-container")
        this.formLogin.addEventListener("submit", this.handleSubmit);

        this.titleScreen = document.createElement('div');
        this.titleScreen.classList.add('big-title');
        this.titleScreen.innerText = 'Login'
        this.link = document.createElement('span');
        this.link.innerText = 'Create a new account'
        this.link.classList.add('link')
        this.link.addEventListener('click', this.handleClickLink)


        this.email = new Input(
            "Email address",
            "text",
            "email",
            "email"
        )

        this.password = new Input(
            "Password",
            "password",
            "password",
            "password"
        );

        this.btnSubmit = new Button(
            "Sign",
            "submit",
            ["btn", "btn-primary"],
        );

    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target;
        let isError = false;
        if (checkEmail(email.value)) {
            this.email.setError(checkEmail(email.value))
            isError = true;
        }
        if (checkPassWord(password.value)) {
            console.log('Loi password')
            this.password.setError(checkPassWord(password.value))
            isError = true
        }
        if(!isError){
           this.email.removeErr(checkEmail(email.value))
           this.password.removeErr(checkEmail(email.value))
        }
    }
    handleClickLink =()=>{
      
        const register = new RegisterScreen();
       const app = new App()
       app.changeActiveScreen(register)
    }
    render() {
        this.formLogin.append(
            this.titleScreen,
            this.email.render(),
            this.password.render(),
            this.btnSubmit.render(),
            this.link
        )

        this.container.append(this.imgCover, this.formLogin)
        return this.container
    }
}

export default LoginScreen