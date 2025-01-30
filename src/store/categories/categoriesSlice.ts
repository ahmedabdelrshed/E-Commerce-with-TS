import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { ICategory, TLoading } from "@customTypes/index";
import { isString } from "@customTypes/guards";

interface ICategories {
    records:ICategory[],
    loading: TLoading
    error: string | null,
}

const initialState: ICategories = {
    records: [],
    loading: 'idle',
    error: null,
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        cleanUpCategories: (state) => {
            state.records = []
}
    },
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.records = action.payload
        })
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = 'failed'
            if (isString(action.payload))
                state.error = action.payload        })
    }
})
export const {cleanUpCategories} = categoriesSlice.actions
export default categoriesSlice.reducer