import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Observable } from 'rxjs';
import { Feedback } from 'src/app/Models/feedback';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-trainer-feedback',
  templateUrl: './trainer-feedback.component.html',
  styleUrls: ['./trainer-feedback.component.css']
})
export class TrainerFeedbackComponent implements OnInit {

  @Input() member;
  feedbacks$: Observable<Feedback[]>;
  currentRate = 5;
  feedback = new FormControl('');
  constructor(public activeModal: NgbActiveModal, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.member);
    const newFeedback: Feedback = {
            id : 0,
            memberId : this.member.memberId,
            trainerId : this.member.trainerId,
            date : new Date('2019-01-16')  ,
            rating : this.currentRate,
            review : this.feedback.value
    }
    this.feedbackService.createFeedback(newFeedback);
    console.log(newFeedback)
    console.log(this.currentRate);
    console.log(this.feedback.value);
  }
}
