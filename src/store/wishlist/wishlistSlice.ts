import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";

interface IWishListState {
    itemsId: number[]
    error: string | null
}
const initialState: IWishListState = {
    itemsId: [],
    error: null,
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {

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
            } else {
                state.itemsId.push(id)
            }
        })

        builder.addCase(actLikeToggle.rejected, (state, action) => {
            state.error = action.payload as string
        })
    }
})


export default wishlistSlice.reducer