import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailsComponent } from './doctor-details.component';

describe('DoctorDetailsComponent', () => {
  let component: DoctorDetailsComponent;
  let fixture: ComponentFixture<DoctorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
