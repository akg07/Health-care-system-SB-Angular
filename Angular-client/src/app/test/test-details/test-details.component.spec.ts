import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetailsComponent } from './test-details.component';

describe('TestDetailsComponent', () => {
  let component: TestDetailsComponent;
  let fixture: ComponentFixture<TestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
