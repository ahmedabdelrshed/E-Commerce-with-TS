import { ICategory } from "@customTypes/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetCategories = createAsyncThunk('categories/getCategories', async (_, thunAPI) => {
    const { rejectWithValue } = thunAPI
    try {
        const response = await axios.get<ICategory[]>('http://localhost:5000/categories')

        return response.data
    } catch (error) {
        if (axios.isAxiosError(error))
            return rejectWithValue(error.response?.data.message || error.message)
        else
            return rejectWithValue("Unexpected error: " + error)
    }

})
export default actGetCategories
