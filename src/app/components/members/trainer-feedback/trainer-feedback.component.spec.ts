import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerFeedbackComponent } from './trainer-feedback.component';

describe('TrainerFeedbackComponent', () => {
  let component: TrainerFeedbackComponent;
  let fixture: ComponentFixture<TrainerFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
