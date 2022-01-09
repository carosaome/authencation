import Button from "../../components/button.js";
import Input from "../../components/input.js";
// import Validator2 from "../../common/validator2.js";
import { checkEmail, checkPassWord, confirnPassWord, checkFullName, checkAccount } from "../../common/validator.js"
import confirnEmail from "../../components/confirnEmail.js";
import LoginScreen from "../Login/index.js";
import App from "../../index.js";
import {createNewAccount} from "../../../firebase/auth.js"

class RegisterScreen
{   fullName;
    confirnPassword;
    email;
    account;
    password;
    container;
    err;
    emailPage;
    link;


    imgCover;
    formLogin;
    btnSubmit;
    titleScreen;
    constructor(){
        this.container = document.createElement('div')
        this.container.classList.add('login-form', "d-flex");

        this.imgCover = document.createElement('div');
        this.imgCover.classList.add("img-cover")

        this.formLogin = document.createElement('form');
        this.formLogin.classList.add("form-container")
        this.formLogin.addEventListener("submit", this.handleSubmit);

        this.titleScreen = document.createElement('div');
        this.titleScreen.classList.add('big-title');
        this.titleScreen.innerText = 'Register  '

        this.link = document.createElement('span')
        this.link.innerText =  "I've had a account!"
        this.link.classList.add('link')
        this.link.addEventListener('click', this.handleClickLink)

        this.fullName = new Input(
            "Full Name",
            "text",
            "fullname",
            "fullname"
        )
        this.email = new Input(
            "Email address",
            "text",
            "email",
            "email"
        )
   

        this.confirnPassword = new Input(
            "Confirn Password",
            "password",
            "confirnPassword",
            "confirnPassword"
        );
        this.account = new Input(
            "Account",
            "text",
            "account",
            "account"
        )

        this.password = new Input(
            "Password",
            "password",
            "password",
            "password"
        );

        this.btnSubmit = new Button(
            "Register",
            "submit",
            ["btn", "btn-primary"],          
        );
        
        this.emailPage = new confirnEmail()
        

    }
    handleSubmit=(e)=>{
      e.preventDefault();
      const {fullname, email, confirnPassword, account, password} = e.target
      let isError = false;
      if (checkEmail(email.value)) {
        this.email.setError(checkEmail(email.value))
        console.log(checkEmail(email.value))
        isError = true;
    }
    if (checkPassWord(password.value)) {
        console.log('Loi password')
        this.password.setError(checkPassWord(password.value))
        isError = true
    }
    if(confirnPassWord(password.value, confirnPassword.value)){
        this.confirnPassword.setError(confirnPassWord(password.value, confirnPassword.value))
        isError = true
    }

    if(checkFullName(fullname.value)){
        this.fullName.setError(checkFullName(fullname.value))
        isError = true
    }

    if(checkAccount(account.value)){
        this.account.setError(checkAccount(account.value))
        isError = true
    }

    

    if(!isError){
       this.email.removeErr(checkEmail(email.value))
       this.password.removeErr(checkEmail(email.value))
       this.confirnPassword.removeErr()
       this.imgCover.remove()
       this.formLogin.remove()
       this.container.append(this.emailPage.render())
       createNewAccount(email.value, password.value)
    }


    }
    handleClickLink=(e)=>{
        e.preventDefault();
        const login = new LoginScreen();
        const app = new App()
        app.changeActiveScreen(login)
    }
    render(){
        this.formLogin.append(
            this.titleScreen,
            this.fullName.render(),
            this.email.render(),
            this.account.render(),
            this.password.render(),
            this.confirnPassword.render(),
            this.btnSubmit.render(),
            this.link
        )

        this.container.append(this.imgCover, this.formLogin)
      
        return this.container
        
    }
    
}

export default RegisterScreen
