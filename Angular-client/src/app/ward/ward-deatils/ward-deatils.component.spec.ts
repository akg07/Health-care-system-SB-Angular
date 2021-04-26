import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardDeatilsComponent } from './ward-deatils.component';

describe('WardDeatilsComponent', () => {
  let component: WardDeatilsComponent;
  let fixture: ComponentFixture<WardDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
