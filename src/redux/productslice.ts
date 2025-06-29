import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/types/product";

export const fetchProducts = createAsyncThunk<ProductType[]>(
  "product/fetchProducts",
  async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    return data.products;
  }
);

interface ProductState {
  products: ProductType[];
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
