import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {TopNavBarComponent} from "./top-nav-bar/top-nav-bar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    IndexComponent,
    TopNavBarComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
  }
}
