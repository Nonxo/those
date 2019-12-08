import { TestBed } from '@angular/core/testing';

import { ValidationUtilService } from './validation-util.service';

describe('ValidationUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationUtilService = TestBed.get(ValidationUtilService);
    expect(service).toBeTruthy();
  });
});
