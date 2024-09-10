import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProductWithQuant extends IProduct {
  quantity: number;
}

interface IInitial {
  confirmed: boolean;
  products: IProductWithQuant[];
}

const initialState: IInitial = {
  confirmed: false,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<IProduct>) {
      state.products.push({ ...action.payload, quantity: 1 });
    },
    remove(state, action: PayloadAction<IProduct>) {
      state.products = state.products.filter(
        (item) => item.name !== action.payload.name
      );
    },
    increase(state, action: PayloadAction<IProduct>) {
      const indexOf = state.products.findIndex(
        (item) => item.name === action.payload.name
      );
      state.products[indexOf].quantity += 1;
    },
    decrease(state, action: PayloadAction<IProduct>) {
      const indexOf = state.products.findIndex(
        (item) => item.name === action.payload.name
      );
      state.products[indexOf].quantity -= 1;
      if (!state.products[indexOf].quantity)
        state.products = state.products.filter(
          (item) => item.name !== action.payload.name
        );
    },
  },
});

export const { add, remove, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
