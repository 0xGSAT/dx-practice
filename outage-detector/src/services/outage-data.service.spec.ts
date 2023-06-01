import { TestBed } from '@angular/core/testing';
import { OutageDataService } from './outage-data.service';

describe('OutageServiceDataService', () => {
  let service: OutageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
