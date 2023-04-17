import { TestBed } from '@angular/core/testing';

import { MotsService } from './mots.service';

describe('MotsService', () => {
  let service: MotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
