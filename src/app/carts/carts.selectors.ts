import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCarts from './carts.reducer';

export const selectCartsState = createFeatureSelector<fromCarts.State>(
  fromCarts.cartsFeatureKey
);

export const selectCart = createSelector(
  selectCartsState,
  (state: fromCarts.State) => state.cart
);
