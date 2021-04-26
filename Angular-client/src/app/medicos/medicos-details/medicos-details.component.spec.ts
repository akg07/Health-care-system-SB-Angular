import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosDetailsComponent } from './medicos-details.component';

describe('MedicosDetailsComponent', () => {
  let component: MedicosDetailsComponent;
  let fixture: ComponentFixture<MedicosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
