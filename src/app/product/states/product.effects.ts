import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductActionTypes, LoadProductsSuccess } from './product.actions';
import { ProductService } from '../services/product.service';
import { switchMapTo, map } from 'rxjs/operators';



@Injectable()
export class ProductEffects {

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductActionTypes.LoadProducts),
    // only using switchMap for Get data
    switchMapTo(this.productService.getAllProducts()),
    map(products => new LoadProductsSuccess({
      products
    }))
  );

  constructor(private actions$: Actions, private productService: ProductService) {}

}
