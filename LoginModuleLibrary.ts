import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//BrowerModule says that the library mentioned below will be loaded in the browser
import { LoginComponent } from './LoginComponent';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [LoginComponent],
    bootstrap: [LoginComponent]
})
export class LoginModuleLibrary {}