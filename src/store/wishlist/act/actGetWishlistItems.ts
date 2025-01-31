import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const actGetWishlistItems = createAsyncThunk('wishlist/getWishlistItems', async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkAPI
    try {
        const userWishlist = await axios.get<{ productId: number }[]>('/wishlist?userId=1', {
            signal
        })
        if (!userWishlist.data.length)
            return fulfillWithValue([])
        const wishlistItemsIds = userWishlist.data.map((item) => `id=${item.productId}`).join('&')
        const response = await axios.get(`/products?${wishlistItemsIds}`, {
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

export default actGetWishlistItems