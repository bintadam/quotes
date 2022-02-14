import { TestBed } from '@angular/core/testing';

import { GitSearchRequestService } from './git-search-request.service';

describe('GitSearchRequestService', () => {
  let service: GitSearchRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitSearchRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
