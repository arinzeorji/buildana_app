import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//FETCH ALL USERS
export const fetchAdminProducts = createAsyncThunk(
    "adminProducts/fetchProducts", async() => {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/admin/products`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`
                }
            }
        )
        return response.data;
    }
)

//ADMIN ADD PRODUCT THUNK
export const addProduct = createAsyncThunk(
    "adminProducts/addProduct",
    async(productData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/products`,
                productData, {
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

//ADMIN UPDATE PRODUCT INFO
export const updateProduct = createAsyncThunk(
    'adminProducts/updateProduct',
    async({ id, productData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/products/${id}`,
                productData, {
                    headers: {
                        Authorization: `${localStorage.getItem("userToken")}`
                    }
                }
            )
            return response.data;

        } catch (error) {
            console.error(error)
            rejectWithValue(error.response.data)
        }
    }
)

//ADMIN DELETE PRODUCT
export const deleteProduct = createAsyncThunk(
    "adminProducts/deleteProduct",
    async(id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`
                }
            });

            return response.data;
        } catch (error) {
            console.error(error);
            rejectWithValue(error.response.data);
        }
    }
)


//ADMIN PRODUCT SLICE
const adminProductSlice = createSlice({
    name: 'adminProducts',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAdminProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchAdminProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        }).addCase(fetchAdminProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }).addCase(updateProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(updateProduct.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.users.findIndex(
                (product) => product._id === action.payload._id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        }).addCase(updateProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }).addCase(deleteProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = state.products.filter(
                (product) => product._id !== action.payload._id);
        }).addCase(deleteProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }).addCase(addProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(addProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products.push(action.payload);
        }).addCase(addProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
    }
})


export default adminProductSlice.reducer;