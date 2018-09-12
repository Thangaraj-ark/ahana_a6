import { TestBed, inject } from '@angular/core/testing';

import { AhanaService } from './ahana.service';

describe('AhanaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AhanaService]
    });
  });

  it('should be created', inject([AhanaService], (service: AhanaService) => {
    expect(service).toBeTruthy();
  }));
});
