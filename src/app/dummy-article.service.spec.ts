import { TestBed } from '@angular/core/testing';

import { DummyArticleService } from './dummy-article.service';

describe('DummyArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyArticleService = TestBed.get(DummyArticleService);
    expect(service).toBeTruthy();
  });
});
