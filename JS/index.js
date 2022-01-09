import LoginScreen from "./comtainers/Login/index.js";
import RegisterScreen from "./comtainers/Register/index.js";

const login = new LoginScreen()

const register = new RegisterScreen()

class App {

    activeScreen
    
    changeActiveScreen  (screen){
        const app = document.getElementById('container')
        if(app){
            app.innerHTML =""
        }

        app.appendChild(screen.render())
    }
}
const app = new App
app.changeActiveScreen(login)
export default App