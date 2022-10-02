import { TestBed } from '@angular/core/testing';

import { NotgarduserGuard } from './notgarduser.guard';

describe('NotgarduserGuard', () => {
  let guard: NotgarduserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotgarduserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
