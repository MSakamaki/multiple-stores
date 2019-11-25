import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor() { }

  get(): Observable<Product[]> {
    // tslint:disable-next-line:no-console
    console.log('DUMMY API CALL');
    return of([{
      id: 1, name: '商品1'
    }, {
      id: 2, name: '商品2'
    }, {
      id: 3, name: '商品3'
    }]);
  }
}
