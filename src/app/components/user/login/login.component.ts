import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      username: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required)
    });

  }

  onSubmit(formValues){
    this.authenticationService.login(this.form.value);
    this.router.navigate(['/', 'admin' ]);
  }

}
