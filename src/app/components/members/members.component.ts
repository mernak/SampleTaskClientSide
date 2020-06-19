import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/Models/member';
import { Package } from 'src/app/Models/package';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberFormComponent } from './member-form/member-form.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  member$: Observable<Member[]>;
  outputMember: Member[];


constructor(private modalService: NgbModal) {


}


ngOnInit(): void {
  const firstpackage: Package = {
    id: 1,
    cost: 20,
    name: 'Premium Package',
    freePtsessions: 2,
    subscriptionDuration: 3,
    discount: 0,
    finalPrice: 3
  };
  const member: Member[] = [
  ];

  this.outputMember = member;
  }

  onUpdateMember(member){
    const modalRef = this.modalService.open(MemberFormComponent);
    modalRef.componentInstance.package = member;
  }

  open(){
    const modalRef = this.modalService.open(MemberFormComponent);
  }
}
