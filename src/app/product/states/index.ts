import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppState } from '../../root/states';

import * as fromProduct from './product.reducer';

export interface ProductState extends AppState {
  product: fromProduct.ProductEntity;
}

export const reducers: ActionReducerMap<ProductState> = {
  product: fromProduct.reducer
};

export const metaReducers: MetaReducer<ProductState>[] = !environment.production
  ? []
  : [];

export const getProductsFeature = createFeatureSelector<ProductState>(
  'products'
);

export const getProductState = createSelector(
  getProductsFeature,
  state => state.product
);

export const getAllProducts = createSelector(
  getProductState,
  fromProduct.selectAll
);

export const getLoadingState = createSelector(
  getProductState,
  fromProduct.getLoading
);
