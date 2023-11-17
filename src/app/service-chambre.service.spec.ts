import { TestBed } from '@angular/core/testing';

import { ServiceChambreService } from './service-chambre.service';

describe('ServiceChambreService', () => {
  let service: ServiceChambreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceChambreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
