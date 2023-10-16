import { TestBed } from '@angular/core/testing';

import { RoataionalServicesService } from './roataional-services.service';

describe('RoataionalServicesService', () => {
  let service: RoataionalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoataionalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
