import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/Models/trainer';
import { Observable } from 'rxjs/internal/Observable';
import { TrainerService } from 'src/app/services/trainer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrainerFormComponent } from '../trainer-form/trainer-form.component';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  trainer$: Observable<Trainer>;
  constructor(private trainerService: TrainerService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.trainer$ = this.trainerService.getTrainer(1);

  }
  onUpdate(trainer){
    const modalRef = this.modalService.open(TrainerFormComponent);
    modalRef.componentInstance.trainer = trainer;
  }

}
