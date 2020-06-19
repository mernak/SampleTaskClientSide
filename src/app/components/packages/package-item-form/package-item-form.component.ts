import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PackageService } from '../../../services/package.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Package } from 'src/app/Models/package';

@Component({
  selector: 'app-package-item-form',
  templateUrl: './package-item-form.component.html',
  styleUrls: ['./package-item-form.component.css']
})
export class PackageItemFormComponent implements OnInit {

  @Input() package;
  form: FormGroup;
  newPackage: Package;
  case;
  constructor(private packageService: PackageService, public activeModal: NgbActiveModal) {
    this.case = 'Add new';
    this.form = new FormGroup({
     id: new FormControl(),
      name: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      subscriptionDuration: new FormControl('', Validators.required),
      freePtsessions: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      discount: new FormControl(''),
      finalPrice: new FormControl('')
    });
   }

  ngOnInit(): void {
    if (this.package){
      this.case = 'Update';
      console.log(this.package);
      this.form.controls.name.setValue(this.package.name);
      this.form.controls.subscriptionDuration.setValue(this.package.subscriptionDuration);
      this.form.controls.freePtsessions.setValue(this.package.freePtsessions);
      this.form.controls.cost.setValue(this.package.cost);
      this.form.controls.discount.setValue(this.package.discount);
    }
  }
  onSubmit(packageItem){
    debugger
    console.log(packageItem);
    if (this.package.id > 0)
    {
       this.packageService.updatePackage(this.package.id, this.package).subscribe();
    }
     else{
      this.newPackage = packageItem;
      this.packageService.createPackage(this.newPackage).subscribe(res => console.log('errrooorrr  ' + res));
     }

  }
}
