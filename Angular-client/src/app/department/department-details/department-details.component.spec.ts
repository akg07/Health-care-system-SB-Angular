import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailsComponent } from './department-details.component';

describe('DepartmentDetailsComponent', () => {
  let component: DepartmentDetailsComponent;
  let fixture: ComponentFixture<DepartmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
