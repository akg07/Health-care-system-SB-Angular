import { TestBed } from '@angular/core/testing';

import { SpecializationService } from './specialization.service';

describe('SpecializationService', () => {
  let service: SpecializationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecializationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
