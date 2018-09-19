import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomChargeItemComponent } from './room-charge-item.component';

describe('RoomChargeItemComponent', () => {
  let component: RoomChargeItemComponent;
  let fixture: ComponentFixture<RoomChargeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomChargeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomChargeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
