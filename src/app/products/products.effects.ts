import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ProductsActionTypes, ProductsActions, PorductsLoaded } from './products.actions';
import { ApiProductsService } from '../service/api-products.service';



@Injectable()
export class ProductsEffects {


  @Effect()
  loadProductss$ = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProductss),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    mergeMap(() => this.products.get().pipe(
      map(products => new PorductsLoaded({ products }))
    ))
  );


  constructor(
    private products: ApiProductsService,
    private actions$: Actions<ProductsActions>) {}

}
