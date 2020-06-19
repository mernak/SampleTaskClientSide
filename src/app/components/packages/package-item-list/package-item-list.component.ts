import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/package.service';
import { Package } from 'src/app/Models/package';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PackageItemFormComponent } from '../package-item-form/package-item-form.component';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-package-item-list',
  templateUrl: './package-item-list.component.html',
  styleUrls: ['./package-item-list.component.css']
})
export class PackageItemListComponent implements OnInit {
  packageList$: Observable<Package[]>;
  constructor(private packageService: PackageService, private modalService: NgbModal, private router: Router) {
   }

  ngOnInit(): void {
    this.loadPackages();
  }

  loadPackages(){
    this.packageList$ = this.packageService.getPackages();
  }
  onDeletePackage(packageItem){
    console.log(packageItem)
    this.packageService.deletePackage(packageItem.id).subscribe();
    this.loadPackages();
  }

  onUpdatePackage(packageItem){
    const modalRef = this.modalService.open(PackageItemFormComponent);
    modalRef.componentInstance.package = packageItem;
    this.loadPackages();
  }

  open() {
    const modalRef = this.modalService.open(PackageItemFormComponent);
    this.loadPackages();
  }
}
