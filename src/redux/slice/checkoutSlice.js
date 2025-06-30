import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//ASYNC THUNK TO CREATE A CHECKOUT SESSION
export const createCheckout = createAsyncThunk("checkout/createCheckout",
    async(checkoutData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/checkout`,
                checkoutData, {
                    headers: {
                        Authourization: `Bearer ${localStorage.getItem("userToken")}`
                    }
                }
            )
            return response.data;

        } catch (error) {
            console.error(error);
            rejectWithValue(error.response.data)
        }
    }
)

//CHECKOUT SLICE
const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {
        checkout: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createCheckout.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(createCheckout.fulfilled, (state, action) => {
                state.loading = false;
                state.checkout = action.payload;
            })
            .addCase(createCheckout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message || "FAILED TO CREATE CHECKOUT"
            })
    }
})

export default checkoutSlice.reducer;