import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientCategoryComponent } from './update-patient-category.component';

describe('UpdatePatientCategoryComponent', () => {
  let component: UpdatePatientCategoryComponent;
  let fixture: ComponentFixture<UpdatePatientCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePatientCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
