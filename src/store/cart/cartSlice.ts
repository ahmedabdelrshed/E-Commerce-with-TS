import { IProduct, TLoading } from "@customTypes/index";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import getProductsByIds from "./act/actGetProductsByIds";
import { isString } from "@customTypes/guards";

// Define your initial state here
interface ICart {
    items: { [key: string]: number }
    productsInfo: IProduct[]
    loading: TLoading
    error: string | null
}
const initialState: ICart = {
    items: {},
    productsInfo: [],
    loading: 'idle',
    error: null
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
        },
        changeQuantityOfCartItem: (state, action) => {
            const { id, quantity } = action.payload
            state.items[id] = quantity
        },
        removeCartItem: (state, action) => {
            delete state.items[action.payload]
            state.productsInfo = state.productsInfo.filter(product => product.id !== action.payload)
        },
        cartItemsCleanUp: (state) => {
            state.productsInfo = []
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getProductsByIds.pending, (state) => {
            state.loading = 'pending'
            state.error = null

        })
        builder.addCase(getProductsByIds.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.productsInfo = action.payload
        })
        builder.addCase(getProductsByIds.rejected, (state, action) => {
            state.loading = 'failed'
            if (isString(action.payload))
                state.error = action.payload
        })
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
export const { addToCart, changeQuantityOfCartItem, removeCartItem, cartItemsCleanUp } = cartSlice.actions