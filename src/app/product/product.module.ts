import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './states';
import { ProductEffects } from './states/product.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', fromProduct.reducers, {
      metaReducers: fromProduct.metaReducers
    }),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule {}
