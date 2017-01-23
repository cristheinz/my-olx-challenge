import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

import { Item } from './item';
import { ITEMS } from './mock-items';

@Injectable()
export class ItemsService {

  constructor(/*private http: Http*/) {}
  
//   getItems(): Item[] {
//     return ITEMS;
//   }
  getItems(): Promise<Item[]> {
    return Promise.resolve(ITEMS);
  }
//   getAllItems() {
//     return this.http.get('/api/items')
//       .map(res => res.json());
//   }
}
