import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CartsEffects } from './carts.effects';

describe('CartsEffects', () => {
  let actions$: Observable<any>;
  let effects: CartsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CartsEffects>(CartsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
