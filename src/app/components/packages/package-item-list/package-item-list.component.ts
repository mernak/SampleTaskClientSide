import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/package.service';
import { Package } from 'src/app/Models/package';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PackageItemFormComponent } from '../package-item-form/package-item-form.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-package-item-list',
  templateUrl: './package-item-list.component.html',
  styleUrls: ['./package-item-list.component.css']
})
export class PackageItemListComponent implements OnInit {
  packageList$: Observable<Package[]>;

  constructor(private packageService: PackageService, private modalService: NgbModal) { }

  ngOnInit(): void {
     this.packageList$ = this.packageService.getPackages();
  }

  onDeletePackage(packageItem){
    console.log(packageItem)
    this.packageService.deletePackage(packageItem.id).subscribe();
  }

  onUpdatePackage(packageItem){
    const modalRef = this.modalService.open(PackageItemFormComponent);
    modalRef.componentInstance.package = packageItem;
  }

  open() {
    const modalRef = this.modalService.open(PackageItemFormComponent);
  }
}
