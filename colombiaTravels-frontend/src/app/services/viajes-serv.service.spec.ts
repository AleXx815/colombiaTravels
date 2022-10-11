import { TestBed } from '@angular/core/testing';

import { ViajesServService } from './viajes-serv.service';

describe('ViajesServService', () => {
  let service: ViajesServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajesServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
