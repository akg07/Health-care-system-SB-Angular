import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationDetailsComponent } from './specialization-details.component';

describe('SpecializationDetailsComponent', () => {
  let component: SpecializationDetailsComponent;
  let fixture: ComponentFixture<SpecializationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
