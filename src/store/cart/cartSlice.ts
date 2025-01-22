import { IProduct } from "@customTypes/index";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

// Define your initial state here
interface ICart {
    items: { [key: number]: number }
    productsInfo: IProduct[]
}
const initialState: ICart = {
    items: {},
    productsInfo: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload
            if (state.items[id]) {
                state.items[id] += 1
            }
            else {
                state.items[id] = 1
            }
        }
    }
})
export const getCartTotalQuantity = createSelector((state: RootState) => state.cart.items, (items) => {
    const totalItemsQuantity = Object.values(items).reduce(
        (acc, item) => acc + item,
        0
    );
    return totalItemsQuantity
})
export default cartSlice.reducer
export const { addToCart } = cartSlice.actions