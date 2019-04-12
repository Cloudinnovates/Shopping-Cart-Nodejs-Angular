import { TestBed, inject } from '@angular/core/testing';

import { PortadaService } from './portada.service';

describe('PortadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortadaService]
    });
  });

  it('should be created', inject([PortadaService], (service: PortadaService) => {
    expect(service).toBeTruthy();
  }));
});
