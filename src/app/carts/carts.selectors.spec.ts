import * as fromCarts from './carts.reducer';
import { selectCartsState } from './carts.selectors';

describe('Carts Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCartsState({
      [fromCarts.cartsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
