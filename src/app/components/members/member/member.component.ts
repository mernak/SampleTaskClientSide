import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MemberService } from 'src/app/services/member.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Member } from 'src/app/Models/member';
import { Router } from '@angular/router';
import { TrainersComponent } from '../../trainers/trainers/trainers.component';
import { TrainerFeedbackComponent } from '../trainer-feedback/trainer-feedback.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  member$: Observable<Member>;
  constructor(private memberService: MemberService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.member$ = this.memberService.getMember(1);

  }
  viewTrainers(){
    const modalRef = this.modalService.open(TrainersComponent);
  }
  giveFeedback(){
    const modalFeedbackRef = this.modalService.open(TrainerFeedbackComponent);
    this.member$.subscribe(x => modalFeedbackRef.componentInstance.member = x);
  }
}
