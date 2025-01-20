import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
type TResponse = {
    id: number,
    title: string,
    img: string,
    prefix: string,
}[]
const actGetCategories = createAsyncThunk('categories/getCategories', async (_, thunAPI) => {
    const { rejectWithValue } = thunAPI
    try {
        const response = await axios.get<TResponse>('http://localhost:5000/categories')
        
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error))
            return rejectWithValue(error.response?.data.message || error.message)
        else
            return rejectWithValue("Unexpected error: " + error)
    }

})
export default actGetCategories
