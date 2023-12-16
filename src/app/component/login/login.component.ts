import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from "../../service/auth/auth.service";
import {PopupComponent} from "../popup/popup.component";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PopupComponent,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  loggedIn: boolean = false;
  showPopup: boolean = false;
  errorMessage: string = '';
  loginForm: FormGroup;


  constructor(private router: Router,private authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      ).subscribe(
        success => {
          this.loginError = !success;
          this.loggedIn = success;
          if (!success) {
            this.showPopup = true;
            this.errorMessage = 'Wrong username or password';
          } else {
            this.router.navigate(['/'])
          }
        }
      );
    }
  }

  onPopupClosed() {
    this.showPopup = false
  }
}
