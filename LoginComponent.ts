import { Component } from "@angular/core"
import { Login } from "../Model/Login"
//Decorator for defining attributes. It defines how the LoginComponent will be binded with the Master page
@Component({
    selector: "login-ui",
    templateUrl: "Login.html"
})
export class LoginComponent {
    // binding logic
    loginobj: Login = new Login();
}