import {Routes} from '@angular/router';
import {MainComponent} from "./component/main/main.component";
import {LoginComponent} from "./component/login/login.component";
import {LogoutComponent} from "./component/logout/logout.component";

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
];
