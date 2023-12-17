import {Component} from '@angular/core';
import {AuthService} from "../../../service/auth/auth.service";

@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.css'
})
export class TopNavBarComponent {

  constructor(private authService: AuthService) {
  }

  logout() {
    this.authService.logout()
  }
}
