import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//AYNSC THUNK TO FETCH USERS ORDERS
export const fetchUserOrders = createAsyncThunk(
    "orders/fetchUserOrders",
    async(_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/orders/my-orders`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`
                    }
                }
            )
            return response.data;

        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data)
        }
    }
)

//THUNK TO FETCH ORDER BY ID
export const fetchOrderDetails = createAsyncThunk(
    "orders/fetchOrderDetails",
    async(orderId, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/orders/${orderId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`
                    }
                }
            )
            return response.data;
        } catch (error) {
            console.error(error);
            rejectWithValue(error.response.data);
        }
    }
)

//THUNK TO UP

//ORDER SLICE STATE MANAGEMENT
const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        totalOrders: 0,
        orderDetails: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            }).addCase(fetchUserOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            }).addCase(fetchUserOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message || "Error Fetching Orders";
            }).addCase(fetchOrderDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            }).addCase(fetchOrderDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            }).addCase(fetchOrderDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message || "Error Fetching Order Details";
            })
    }
})


export default orderSlice.reducer;