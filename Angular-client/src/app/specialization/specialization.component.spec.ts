import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationComponent } from './specialization.component';

describe('SpecializationComponent', () => {
  let component: SpecializationComponent;
  let fixture: ComponentFixture<SpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
