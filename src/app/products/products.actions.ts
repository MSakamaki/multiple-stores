import { Action } from '@ngrx/store';
import { Product } from '../service/api-products.service';

export enum ProductsActionTypes {
  LoadProductss = '[Products] Load Productss',
  PorductsLoaded = '[Products] Productss Loaded',
}

export class LoadProductss implements Action {
  readonly type = ProductsActionTypes.LoadProductss;
}

export class PorductsLoaded implements Action {
  readonly type = ProductsActionTypes.PorductsLoaded;
  constructor(public payload: { products: Product[] }) {}
}


export type ProductsActions = LoadProductss | PorductsLoaded;
