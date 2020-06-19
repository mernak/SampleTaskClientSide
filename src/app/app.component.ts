import { Component } from '@angular/core';
import { User } from './Models/user';
import { AuthenticationService } from './services/authentication.service';
import { Role } from './Models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
}

get isUser(){
  return this.authenticationService.loggedIn;
}
get isAdmin() {
  return this.user && this.user.role === Role.Admin;
}
get isTrainer() {
  return true; // this.user && this.user.role === Role.Trainer;
}
get isMember() {
  return true; // this.user && this.user.role === Role.Member;
}

  logout() {
    this.authenticationService.logout();
}
}
