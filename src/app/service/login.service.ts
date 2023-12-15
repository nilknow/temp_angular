import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";

// todo replace with real backend API
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  private users: any[] = [
    { username: 'admin', password: 'admin_pass' },
    { username: 'user', password: 'user_pass' },
  ];

  login(username: string, password: string): Observable<boolean> {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      // Simulate a successful login with a delay of 1 second
      return of(true).pipe(delay(1000));
    } else {
      // Simulate an unsuccessful login with a delay of 1 second
      return of(false).pipe(delay(1000));
    }
  }
}
