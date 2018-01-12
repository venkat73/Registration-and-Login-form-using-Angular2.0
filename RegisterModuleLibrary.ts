import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//BrowerModule says that the library mentioned below will be loaded in the browser
import { RegisterComponent } from './RegisterComponent';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RegisterComponent],
    bootstrap: [RegisterComponent]
})
export class RegisterModuleLibrary { }