/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemsService } from './items.service';

describe('ItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsService]
    });
  });

  it('should create', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get items', inject([ItemsService], (service: ItemsService) => {
    service.getItems().then(items => {
      expect(items.length).toEqual(6);
    });
    
  }));
});
