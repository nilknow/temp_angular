import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {Router} from "@angular/router";

// todo replace with real backend API
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userNameKey = 'userName';
  private readonly expirationTimeKey = 'expirationTime';

  constructor(private router:Router) {
  }

  private users: any[] = [
    {username: 'admin', password: 'admin_pass'},
    {username: 'user', password: 'user_pass'},
  ];

  login(username: string, password: string): Observable<boolean> {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem(this.userNameKey, username);
      //todo can add things like jwt token or sessionId in storage in production environment
      this.resetExpirationTime()
      // Simulate a successful auth with a delay of 1 second
      return of(true).pipe(delay(1000));
    } else {
      // Simulate an unsuccessful auth with a delay of 1 second
      return of(false).pipe(delay(1000));
    }
  }

  logout() {
    localStorage.removeItem(this.userNameKey);
    localStorage.removeItem(this.expirationTimeKey);
    this.router.navigate(['/'])
  }

  // Check if the user is logged in based on the expiration time
  isLoggedIn() {
    const expirationTime = localStorage.getItem(this.expirationTimeKey);
    if (expirationTime) {
      const currentTime = new Date().getTime();
      return currentTime < +expirationTime;
    }
    return false;
  }

  resetExpirationTime(){
    localStorage.setItem(this.expirationTimeKey, String(new Date().getTime() + 10 * 60 * 1000));
  }
}
