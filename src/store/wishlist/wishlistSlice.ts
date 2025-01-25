import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import { IProduct, TLoading } from "@customTypes/index";
import actGetWishlistItems from "./act/actGetWishlistItems";

interface IWishListState {
    itemsId: number[]
    error: string | null
    loading: TLoading
    productsFullInfo: IProduct[]
}
const initialState: IWishListState = {
    itemsId: [],
    error: null,
    loading: 'idle',
    productsFullInfo: []
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        productsWishlistCleanUp: (state) => {
            state.productsFullInfo = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actLikeToggle.pending, (state) => {
            state.error = null
        })
        builder.addCase(actLikeToggle.fulfilled, (state, action) => {
            const type = action.payload.type
            const id = action.payload.id
            if (type === 'delete') {
                state.itemsId = state.itemsId.filter((itemId) => itemId !== id)
                state.productsFullInfo = state.productsFullInfo.filter((product) => product.id !== id)
            } else {
                state.itemsId.push(id)
            }
        })

        builder.addCase(actLikeToggle.rejected, (state, action) => {
            state.error = action.payload as string
        })
        // get wishlist items
        builder.addCase(actGetWishlistItems.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetWishlistItems.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.productsFullInfo = action.payload
        })
        builder.addCase(actGetWishlistItems.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload as string
        })
    }
})

export const {productsWishlistCleanUp} = wishlistSlice.actions
export default wishlistSlice.reducer