import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetOverviewComponent } from './pet-overview.component';

describe('PetOverviewComponent', () => {
  let component: PetOverviewComponent;
  let fixture: ComponentFixture<PetOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
