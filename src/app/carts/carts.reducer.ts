
import { CartsActions, CartsActionTypes } from './carts.actions';
import { Product } from '../service/api-products.service';

export const cartsFeatureKey = 'carts';

export interface State {
  cart: Product[]
}

export const initialState: State = {
  cart: []
};

export function reducer(state = initialState, action: CartsActions): State {
  switch (action.type) {

    case CartsActionTypes.AddCart:
      return {
        ...state,
        cart: state.cart
          .find(product => product.id === action.payload.product.id) ?
            state.cart : [...state.cart, action.payload.product ]
      };
    case CartsActionTypes.RemveCart:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.product.id)
      };

    default:
      return state;
  }
}
