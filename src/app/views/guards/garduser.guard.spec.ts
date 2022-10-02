import { TestBed } from '@angular/core/testing';

import { GarduserGuard } from './garduser.guard';

describe('GarduserGuard', () => {
  let guard: GarduserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GarduserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
