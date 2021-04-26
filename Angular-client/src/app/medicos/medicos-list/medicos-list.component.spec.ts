import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosListComponent } from './medicos-list.component';

describe('MedicosListComponent', () => {
  let component: MedicosListComponent;
  let fixture: ComponentFixture<MedicosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
