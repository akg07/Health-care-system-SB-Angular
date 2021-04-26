import { PatientPipe } from './patient.pipe';

describe('PatientPipe', () => {
  it('create an instance', () => {
    const pipe = new PatientPipe();
    expect(pipe).toBeTruthy();
  });
});
