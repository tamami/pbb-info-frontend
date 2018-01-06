import { TestBed, inject } from '@angular/core/testing';

import { SpptService } from './sppt.service';

describe('SpptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpptService]
    });
  });

  it('should be created', inject([SpptService], (service: SpptService) => {
    expect(service).toBeTruthy();
  }));
});
