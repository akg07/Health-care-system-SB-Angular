import { EmployeePipe } from './employee.pipe';

describe('EmployeePipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeePipe();
    expect(pipe).toBeTruthy();
  });
});
