import { IProduct } from "@customTypes/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProducts = createAsyncThunk('products/actGetProductsByCat', async (prefix: string, thunAPI) => {
    const { rejectWithValue,signal } = thunAPI
    try {
        const response = await axios.get<IProduct[]>(`/products?cat_prefix=${prefix}`, {
            signal
        })

        return response.data
    } catch (error) {
        if (axios.isAxiosError(error))
            return rejectWithValue(error.response?.data.message || error.message)
        else
            return rejectWithValue("Unexpected error: " + error)
    }

})
export default actGetProducts
