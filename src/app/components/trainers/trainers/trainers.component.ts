import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TrainerService } from 'src/app/services/trainer.service';
import { Observable } from 'rxjs';
import { Trainer } from 'src/app/Models/trainer';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  trainers$: Observable<Trainer[]>;
  constructor(public activeModal: NgbActiveModal, private trainerService: TrainerService) {

   }

  ngOnInit(): void {
    this.trainers$ = this.trainerService.getTrainers();
  }

}
