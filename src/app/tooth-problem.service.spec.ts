import { TestBed } from '@angular/core/testing';

import { ToothProblemService } from './tooth-problem.service';

describe('ToothProblemService', () => {
  let service: ToothProblemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToothProblemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
