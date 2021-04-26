import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceComponent } from './insurance.component';

describe('InsuranceComponent', () => {
  let component: InsuranceComponent;
  let fixture: ComponentFixture<InsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
