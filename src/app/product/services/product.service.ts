import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product';

const mock: Product[] = [
  {
    id: 'id-1',
    name: 'Product 1',
    price: 4999
  }, {
    id: 'id-2',
    name: 'Product 2',
    price: 6999
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllProducts(): Observable<Product[]> {
    return of(mock).pipe(delay(1000));
  }
}
