import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axios from "axios";

const getProductsByIds = createAsyncThunk('cart/getProductsByIds', async (_, thunAPI) => {
    const { getState, rejectWithValue, fulfillWithValue } = thunAPI
    const { cart } = getState() as RootState
    const { items } = cart
    const ids = Object.keys(items).map(id => `id=${id}`).join('&')
    if (!ids.length)
        return fulfillWithValue([])
    try {
        const response = await axios.get(`/products?${ids}`)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error))
            return rejectWithValue(error.response?.data.message || error.message)
        else
            return rejectWithValue("Unexpected error: " + error)
    }
})
export default getProductsByIds