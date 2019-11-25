import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromProducts from './products/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './products/products.effects';
import * as fromCarts from './carts/carts.reducer';
import { CartsEffects } from './carts/carts.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ProductsEffects, CartsEffects]),
    StoreModule.forFeature(fromProducts.productsFeatureKey, fromProducts.reducer),
    StoreModule.forFeature(fromCarts.cartsFeatureKey, fromCarts.reducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
