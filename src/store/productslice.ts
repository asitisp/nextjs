import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '@/types/product';

// Async thunk to fetch all products
export const fetchProducts = createAsyncThunk<ProductType[]>(
  'products/fetchProducts',
  async () => {
    const res = await fetch('/api/displayproduct');
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    return data.products;
  }
);

interface ProductState {
  items: ProductType[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductType[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch';
      });
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
