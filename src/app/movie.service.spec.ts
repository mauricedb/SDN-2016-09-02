/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MovieService } from './movie.service';

describe('Service: Movie', () => {
  beforeEach(() => {
    addProviders([MovieService]);
  });

  it('should ...',
    inject([MovieService],
      (service: MovieService) => {
        expect(service).toBeTruthy();
      }));
});
