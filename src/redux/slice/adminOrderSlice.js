import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//FETCH ALL ORDERS THUNK
export const fetchOrders = createAsyncThunk(
    "adminOrders/fetchOrders",
    async(orderData, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders`,
                orderData, {
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

export const updateOrderDetails = createAsyncThunk(
    "adminOrders/updateOrderStatus",
    async({ id, status }, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`, { status }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`
                    }
                }
            )

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteOrder = createAsyncThunk(
    "adminOrders/deleteOrder",
    async(id, { rejectWithValue }) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`,

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`
                    }
                }
            )

            return id;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const adminOrderSlice = createSlice({
    name: "adminOrders",
    initialState: {
        orders: [],
        totalOrders: 0,
        totalSales: 0,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.orders = action.payload;
                state.totalOrders = action.payload.length;

                // Calculate Total Sales
                const totalSales = action.payload.reduce((acc, order) => {
                    return acc + order.totalPrice;
                })

                state.totalSales = totalSales
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message || "Fetch Orders Failed";
            })
            .addCase(updateOrderDetails.fulfilled, (state, action) => {
                state.loading = false;
                const updatedOrder = action.payload;
                const orderIndex = state.orders.findIndex(
                    (order) => order._id === updateOrder._id
                );

                if (orderIndex !== -1) {
                    state.orders[orderIndex] = updatedOrder;
                }

            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.orders = state.orders.filter((order) => {
                    order._id !== action.payload;
                });
            })
    }
})


export default adminOrderSlice.reducer;