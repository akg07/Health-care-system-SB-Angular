import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardLIstComponent } from './ward-list.component';

describe('WardLIstComponent', () => {
  let component: WardLIstComponent;
  let fixture: ComponentFixture<WardLIstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardLIstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
