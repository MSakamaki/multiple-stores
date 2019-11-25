import { Action } from '@ngrx/store';
import { Product } from '../service/api-products.service';

export enum CartsActionTypes {
  AddCart = '[Carts] add cart',
  RemveCart = '[Carts] remove cart',
}

export class AddCart implements Action {
  readonly type = CartsActionTypes.AddCart;
  constructor(public payload: { product: Product }) {}
}
export class RemveCart implements Action {
  readonly type = CartsActionTypes.RemveCart;
  constructor(public payload: { product: Product }) {}
}


export type CartsActions = AddCart | RemveCart;
