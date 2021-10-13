import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsContainerComponent } from './appointments-container.component';

describe('AppointmentsContainerComponent', () => {
  let component: AppointmentsContainerComponent;
  let fixture: ComponentFixture<AppointmentsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
