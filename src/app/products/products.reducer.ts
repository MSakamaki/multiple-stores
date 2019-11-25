
import { ProductsActions, ProductsActionTypes } from './products.actions';
import { Product } from '../service/api-products.service';

export const productsFeatureKey = 'products';

export interface State {
  products: Product[];
}

export const initialState: State = {
  products: [],
};

export function reducer(state = initialState, action: ProductsActions): State {
  switch (action.type) {

    case ProductsActionTypes.LoadProductss:
      return state;
    case ProductsActionTypes.PorductsLoaded:
      return {
        ...state,
        products: action.payload.products
      };

    default:
      return state;
  }
}
