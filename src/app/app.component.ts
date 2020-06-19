import { Component } from '@angular/core';
import { User } from './Models/user';
import { AuthenticationService } from './services/authentication.service';
import { Role } from './Models/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }


get isUser(){
  console.log(this.authenticationService.loggedIn);
  return this.authenticationService.loggedIn;
}
get isAdmin() {
  return this.currentUser && this.currentUser.role === Role.Admin;
}
get isTrainer() {
  console.log(this.currentUser);
  return  this.currentUser && this.currentUser.role === Role.Trainer;
}
get isMember() {
  return this.currentUser && this.currentUser.role === Role.Member;
}

  logout() {
    this.authenticationService.logout();
}
}
