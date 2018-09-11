import { TestBed, inject } from '@angular/core/testing';

import { AhanaServiceService } from './ahana-service.service';

describe('AhanaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AhanaServiceService]
    });
  });

  it('should be created', inject([AhanaServiceService], (service: AhanaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
