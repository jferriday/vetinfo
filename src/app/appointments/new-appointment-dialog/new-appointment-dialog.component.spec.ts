import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppointmentDialogComponent } from './new-appointment-dialog.component';

describe('NewAppointmentDialogComponent', () => {
  let component: NewAppointmentDialogComponent;
  let fixture: ComponentFixture<NewAppointmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAppointmentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
