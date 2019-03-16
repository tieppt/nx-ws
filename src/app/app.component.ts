import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './product/models/product';
import * as fromProduct from './product/states';
import { DeleteProduct, LoadProducts } from './product/states/product.actions';

@Component({
  selector: 'nxws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular NgRx';
  productList$: Observable<Product[]>;
  productLoading$: Observable<boolean>;
  constructor(private store$: Store<fromProduct.ProductState>) {}

  ngOnInit() {
    this.productList$ = this.store$.pipe(select(fromProduct.getAllProducts));
    this.productLoading$ = this.store$.pipe(
      select(fromProduct.getLoadingState)
    );
    this.store$.dispatch(new LoadProducts());
  }

  onDelete(id: string) {
    this.store$.dispatch(new DeleteProduct({ id }));
  }
}
