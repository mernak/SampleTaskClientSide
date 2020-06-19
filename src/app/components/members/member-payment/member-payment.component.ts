import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PackageService } from 'src/app/services/package.service';
import { Observable } from 'rxjs';
import { Package } from 'src/app/Models/package';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-payment',
  templateUrl: './member-payment.component.html',
  styleUrls: ['./member-payment.component.css']
})
export class MemberPaymentComponent implements OnInit {

  @Input() loggedInMember;
  package$: Observable<Package>;
  form: FormGroup;
  constructor(public activeModal: NgbActiveModal, private packageService: PackageService) {
    /*
    this.form = new FormGroup({
      id: new FormControl(),
       name: new FormControl(''),
       subscriptionDuration: new FormControl(''),
       freePtsessions: new FormControl(''),
       cost: new FormControl(''),
       discount: new FormControl(''),
       finalPrice: new FormControl('')
     });*/
   }

  ngOnInit(): void {
    console.log(this.loggedInMember);
 /*   this.packageService.getPackage(this.loggedInMember.packageId).subscribe();
    this.package$.subscribe(
      res =>{
        this.form.controls.name.setValue(res.name);
        this.form.controls.subscriptionDuration.setValue(res.subscriptionDuration);
        this.form.controls.freePtsessions.setValue(res.freePtsessions);
        this.form.controls.cost.setValue(res.cost);
        this.form.controls.discount.setValue(res.discount);
        this.form.controls.finalPrice.setValue(res.cost - res.discount);
      }
    );*/

  }

  onSubmit(){
    console.log(this.loggedInMember);
    this.packageService.getPackage(this.loggedInMember.packageId).subscribe();
  }

}
