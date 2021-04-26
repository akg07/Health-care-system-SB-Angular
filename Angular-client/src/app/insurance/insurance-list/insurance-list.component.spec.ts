import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceListComponent } from './insurance-list.component';

describe('InsuranceListComponent', () => {
  let component: InsuranceListComponent;
  let fixture: ComponentFixture<InsuranceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
