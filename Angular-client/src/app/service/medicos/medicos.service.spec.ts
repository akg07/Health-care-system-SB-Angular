import { TestBed } from '@angular/core/testing';

import { MedicosService } from './medicos.service';

describe('MedicosService', () => {
  let service: MedicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
