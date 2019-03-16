import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Product } from '../models/product';
import { ProductActions, ProductActionTypes } from './product.actions';

export interface ProductEntity extends EntityState<Product> {
  // additional entities state properties
  loading: boolean;
  error?: Error;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductEntity = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  error: null
});

export function reducer(state = initialState, action: ProductActions): ProductEntity {
  switch (action.type) {
    case ProductActionTypes.AddProduct: {
      return adapter.addOne(action.payload.product, state);
    }

    case ProductActionTypes.UpsertProduct: {
      return adapter.upsertOne(action.payload.product, state);
    }

    case ProductActionTypes.AddProducts: {
      return adapter.addMany(action.payload.products, state);
    }

    case ProductActionTypes.UpsertProducts: {
      return adapter.upsertMany(action.payload.products, state);
    }

    case ProductActionTypes.UpdateProduct: {
      return adapter.updateOne(action.payload.product, state);
    }

    case ProductActionTypes.UpdateProducts: {
      return adapter.updateMany(action.payload.products, state);
    }

    case ProductActionTypes.DeleteProduct: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ProductActionTypes.DeleteProducts: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ProductActionTypes.LoadProducts: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case ProductActionTypes.LoadProductsSuccess: {
      return {
        ...adapter.addAll(action.payload.products, state),
        loading: false,
        error: null
      };
    }

    case ProductActionTypes.ClearProducts: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const getLoading = (state: ProductEntity) => state.loading;
export const getError = (state: ProductEntity) => state.error;
