import { TestBed } from '@angular/core/testing';

import { WardService } from './ward.service';

describe('WardService', () => {
  let service: WardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
