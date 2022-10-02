import { TestBed } from '@angular/core/testing';

import { DataStudentsService } from './data-students.service';

describe('DataStudentsService', () => {
  let service: DataStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
