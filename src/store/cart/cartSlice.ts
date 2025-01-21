import { IProduct } from "@customTypes/index";
import { createSlice } from "@reduxjs/toolkit";

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

export default cartSlice.reducer
export const { addToCart } = cartSlice.actions