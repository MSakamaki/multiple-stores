import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ProductsReducers from './products/products.reducer';
import * as ProductsActions from './products/products.actions';
import * as ProductsSelectors from './products/products.selectors';

import * as CartReducers from './carts/carts.reducer';
import * as CartActions from './carts/carts.actions';
import * as CartSelectors from './carts/carts.selectors';

import { Product } from './service/api-products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  products$ = this.store.pipe(select(ProductsSelectors.selectProducts));
  cart$ = this.store.pipe(select(CartSelectors.selectCart));

  constructor(private store: Store<ProductsReducers.State | CartReducers.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new ProductsActions.LoadProductss());
  }

  onAddCart(product: Product) {
    this.store.dispatch(new CartActions.AddCart({product}));
  }
  onRemoveCart(product: Product) {
    this.store.dispatch(new CartActions.RemveCart({product}));
  }
}
