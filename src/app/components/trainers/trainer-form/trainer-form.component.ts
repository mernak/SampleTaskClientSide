import { Component, OnInit, Input } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})
export class TrainerFormComponent implements OnInit {
  @Input() trainer;
  form: FormGroup;
  constructor(private trainerService: TrainerService, public activeModal: NgbActiveModal) {
    this.form = new FormGroup({
       id: new FormControl(),
       username: new FormControl('', Validators.required),
       password: new FormControl('', Validators.required),
       firstName: new FormControl(''),
       lastName: new FormControl('')
     });
   }

  ngOnInit(): void {
    this.form.controls.id.setValue(this.trainer.id);
    this.form.controls.username.setValue(this.trainer.username);
    this.form.controls.password.setValue(this.trainer.password);
    this.form.controls.firstName.setValue(this.trainer.firstName);
    this.form.controls.lastName.setValue(this.trainer.lastName);
  }
  onSubmit(trainer){
     this.trainerService.updateTrainer(trainer.id, trainer).subscribe();
     this.activeModal.dismiss();
  }
}
