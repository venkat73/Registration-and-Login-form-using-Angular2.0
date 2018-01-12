import { Component } from "@angular/core"
import { Register } from "../Model/Register"
//Decorator for defining attributes. It defines how the LoginComponent will be binded with the Master page
@Component({
    selector: "register-ui",
    templateUrl: "Register.html"
})
export class RegisterComponent {
    // binding logic
    registerobj: Register = new Register();
}