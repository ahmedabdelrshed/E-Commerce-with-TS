import { createSlice } from "@reduxjs/toolkit";
import { IProduct, TLoading } from "@customTypes/index";
import actGetProducts from "./act/actGetProductsByCat";

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
            state.error = action.payload as string
        })
    }
})

export const { productsCleanUp } = productsSlice.actions
export default productsSlice.reducer