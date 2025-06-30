import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//ASYNC THUNK TO FETCH PRODUCTS BY COLLECTIONS AND OPTIONAL FILTERS
export const fetchProductsByFilters = createAsyncThunk(
    "products/fetchByFilters",
    async({
        collection,
        size,
        color,
        gender,
        minPrice,
        maxPrice,
        sortBy,
        search,
        category,
        material,
        brand,
        limit,
    }) => {
        const query = new URLSearchParams();
        if (collection) query.append("collection", collection);
        if (size) query.append("size", size);
        if (color) query.append("color", color);
        if (gender) query.append("gender", gender);
        if (minPrice) query.append("minPrice", minPrice);
        if (maxPrice) query.append("maxPrice", maxPrice);
        if (sortBy) query.append("sortBy", sortBy);
        if (search) query.append("search", search);
        if (category) query.append("category", category);
        if (material) query.append("material", material);
        if (brand) query.append("brand", brand);
        if (limit) query.append("limit", limit);

        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`);
        return response.data;
    }

);


//ASYNC THUNK TO GET A PRODUCT BY ITS ID
export const fetchProductDetails = createAsyncThunk("products/fetchProductDetails",
    async(id, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
            );
            return response.data;
        } catch (error) {
            rejectWithValue(error.response.data)
        }
    })

//THUMK TO UPDATE PRODUCTS
export const updateProductDetails = createAsyncThunk("products/updateProductDetails",
    async({ id, productData }) => {
        const response = await axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
            productData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                }
            }
        )
        return response.data;
    }
)

//THUNK FOR FETCHING SIMILAR PRODUCTS
export const fetchSimilarProducts = createAsyncThunk("products/fetchSImilarProducts",
    async({ id }) => {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`
        );

        return response.data;
    }
)

//SLICE FOR MANAGING PRODUCT RELATED STATE
const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        selectedProduct: null,
        similarProducts: [],
        loading: false,
        error: null,
        filters: {
            category: "",
            size: "",
            color: "",
            gender: "",
            brand: "",
            minPrice: "",
            maxPrice: "",
            sortBy: "",
            search: "",
            material: "",
            collection: ""
        }
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = {...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filter = {
                category: "",
                size: "",
                color: "",
                gender: "",
                brand: "",
                minPrice: "",
                maxPrice: "",
                sortBy: "",
                search: "",
                material: "",
                collection: "",
            }
        },
    },

    extraReducers: (builder) => {
        //HANDLE FETCHING PRODUCTS WITH FILTER
        builder.addCase(fetchProductsByFilters.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchProductsByFilters.fulfilled, (state, action) => {
            state.loading = false;
            state.products = Array.isArray(action.payload) ? action.payload : [];
        }).addCase(fetchProductsByFilters.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        //HANDLE SINGLE PRODUCT DETAILS
        .addCase(fetchProductDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedProduct = action.payload;
        }).addCase(fetchProductDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        //HANDLE PRODUCT UPDATE
        .addCase(updateProductDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(updateProductDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.updatedProduct = action.payload;
            const index = state.products.findIndex(
                (product) => product._id === updatedProduct._id
            );
            if (index !== -1) {
                state.products[index] = updatedProduct;
            }
        }).addCase(updateProductDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;

            //SIMILAR PRODUCTS
        }).addCase(fetchSimilarProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchSimilarProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.similarProducts = action.payload;
        }).addCase(fetchSimilarProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const { setFilters, clearFilters } = productSlice.actions;
export default productSlice.reducer;