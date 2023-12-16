import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {PopupComponent} from "../popup/popup.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    NgIf,
    PopupComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private authService:AuthService) {
  }

  logout() {
    this.authService.logout()
  }
}
