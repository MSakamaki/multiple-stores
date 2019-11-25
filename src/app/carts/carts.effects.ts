import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CartsActionTypes, CartsActions } from './carts.actions';



@Injectable()
export class CartsEffects {


  // @Effect()
  // loadCartss$ = this.actions$.pipe(
  //   ofType(CartsActionTypes.AddCart),
  //   /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //   concatMap(() => EMPTY)
  // );


  constructor(private actions$: Actions<CartsActions>) {}

}
