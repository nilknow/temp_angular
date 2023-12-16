import {Injectable, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timeout: any;

  constructor(private router: Router, private authService: AuthService) {
    window.addEventListener('mousemove', this.resetExpirationTimer.bind(this));
    window.addEventListener('keydown', this.resetExpirationTimer.bind(this));
    this.resetExpirationTimer();
  }

  resetExpirationTimer() {
    clearTimeout(this.timeout);
    if (this.authService.isLoggedIn()) {
      this.authService.resetExpirationTime();
    }
    this.timeout = setTimeout(() => {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/login'])
      }
    }, 10 * 60 * 1000); // 10 minutes
  }
}
