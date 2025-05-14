/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParcialService } from './parcial.service';

describe('Service: Parcial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParcialService]
    });
  });

  it('should ...', inject([ParcialService], (service: ParcialService) => {
    expect(service).toBeTruthy();
  }));
});
