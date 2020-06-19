import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form: FormGroup;
  @Input() member;

  constructor(public activeModal: NgbActiveModal) {
    this.form = new FormGroup({
     // id: number;
     // role: number;
      password: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      Age: new FormControl(''),
      package: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
    if (this.member){
      this.form.controls.password.setValue(this.member.password);
      this.form.controls.username.setValue(this.member.username);
      this.form.controls.firstName.setValue(this.member.firstName);
      this.form.controls.lastName.setValue(this.member.lastName);
      this.form.controls.Age.setValue(this.member.Age);
      this.form.controls.package.setValue(this.member.package);
    }
  }

  onSubmit(member){
    console.log(member);
  }
}
