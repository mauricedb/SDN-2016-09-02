/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';

describe('Component: Movies', () => {
  it('should create an instance', () => {
    let component = new MoviesComponent(null);
    expect(component).toBeTruthy();
  });
});
