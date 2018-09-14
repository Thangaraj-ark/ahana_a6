import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCategoriesComponent } from './patient-categories.component';

describe('PatientCategoriesComponent', () => {
  let component: PatientCategoriesComponent;
  let fixture: ComponentFixture<PatientCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
