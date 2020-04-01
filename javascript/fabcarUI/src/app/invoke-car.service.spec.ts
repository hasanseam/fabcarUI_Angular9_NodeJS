import { TestBed } from '@angular/core/testing';

import { InvokeCarService } from './invoke-car.service';

describe('InvokeCarService', () => {
  let service: InvokeCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvokeCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
