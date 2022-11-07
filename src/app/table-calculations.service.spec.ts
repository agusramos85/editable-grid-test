import { TestBed } from '@angular/core/testing';

import { TableCalculationsService } from './table-calculations.service';

describe('TableCalculationsService', () => {
  let service: TableCalculationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableCalculationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate first value', () => {
    const res = service.calculate1Value(22, 22);
    expect(res).toBe(29.333333333333332);
  });

  it('should calculate second value', () => {
    const res = service.calculate1Value(1, 22);
    expect(res).toBe(8.333333333333332);
  });

  it('should calculate total value', () => {
    const res = service.calculateTotal(1, 1, 1, 1);
    expect(res).toBe(4);
  });
});
