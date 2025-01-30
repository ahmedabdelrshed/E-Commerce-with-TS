import { createSlice } from "@reduxjs/toolkit";
import { IProduct, TLoading } from "@customTypes/index";
import actGetProducts from "./act/actGetProductsByCat";
import { isString } from "@customTypes/guards";

interface IProducts {
    records: IProduct[],
    loading: TLoading
    error: string | null,
}

const initialState: IProducts = {
    records: [],
    loading: 'idle',
    error: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsCleanUp: (state) => {
            state.records = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProducts.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetProducts.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.records = action.payload
        })
        builder.addCase(actGetProducts.rejected, (state, action) => {
            state.loading = 'failed'
            if (isString(action.payload))
                state.error = action.payload
        })
    }
})

export const { productsCleanUp } = productsSlice.actions
export default productsSlice.reducer