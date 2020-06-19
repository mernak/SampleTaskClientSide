import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPackageComponent } from './member-package.component';

describe('MemberPackageComponent', () => {
  let component: MemberPackageComponent;
  let fixture: ComponentFixture<MemberPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
