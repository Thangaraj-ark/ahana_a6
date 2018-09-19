import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatientCategoryComponent } from './create-patient-category.component';

describe('CreatePatientCategoryComponent', () => {
  let component: CreatePatientCategoryComponent;
  let fixture: ComponentFixture<CreatePatientCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePatientCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePatientCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
