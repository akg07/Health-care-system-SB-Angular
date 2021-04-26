import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosComponent } from './medicos.component';

describe('MedicosComponent', () => {
  let component: MedicosComponent;
  let fixture: ComponentFixture<MedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
