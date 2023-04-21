import { TestBed } from '@angular/core/testing';

import { BaptisteGuardGuard } from './baptiste-guard.guard';

describe('BaptisteGuardGuard', () => {
  let guard: BaptisteGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BaptisteGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
