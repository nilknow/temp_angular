import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {PopupComponent} from "../popup/popup.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    PopupComponent,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //todo inject loginService
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  loggedIn: boolean = false;
  showPopup:boolean=false;
  errorMessage: string = '';

  constructor(private loginService: LoginService) {
  }

  login(): void {
    this.loginService.login(this.username, this.password).subscribe(
      success => {
        this.loginError = !success;
        this.loggedIn = success;
        if (!success) {
          this.showPopup=true;
          this.errorMessage='Wrong username or password'
        }
      }
    );
  }

  onPopupClosed(){
    this.showPopup=false
  }
}
