import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillListComponent } from './bill-list.component';

describe('BillListComponent', () => {
  let component: BillListComponent;
  let fixture: ComponentFixture<BillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
