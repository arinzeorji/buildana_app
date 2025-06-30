import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//HELPER FUNCTION TO GET CART FROM THE LOCALSTORAGE 
const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { products: [] }

}

// Function TO SAVE CART TO localStorage
const saveCartToStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));

}

//FETCH CART FOR A USER OR GUEST
export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async({ userId, guestId }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
                    params: { userId, guestId },
                }
            )
            return response.data;

        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    })

//ADD THUNK TO ADD ITEMS TO CART
export const addToCart = createAsyncThunk("cart/addToCart", async({ productId, quantity, size, color, guestId, userId }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, { productId, quantity, size, color, guestId, userId });
        return response.data
    } catch (error) {
        console.error(error);
        return rejectWithValue(error.response.data);
    }
})

// THUNK TO UPDATE CART ITEM QUANTITY
export const updateCartItemQuantity = createAsyncThunk(
    "cart/updateCartItemQuantity", async({ productId, quantity, size, color, guestId, userId }, { rejectWithValue }) => {

        try {
            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
                    productId,
                    quantity,
                    size,
                    color,
                    guestId,
                    userId
                }
            );
            return response.data;

        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data)
        }
    })

//THUNK TO REMOVE ITEM FROM CART
const removeFromCart = createAsyncThunk("cart/removeFromCart", async({ productId, quantity, color, size, guestId, userId }, { rejectWithValue }) => {
    try {
        const response = await axios({
            method: "DELETE",
            url: `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
            data: { productId, color, size, quantity, guestId, userId }
        })
        return response.data;

    } catch (error) {
        console.error(error);
        return rejectWithValue(error.response.data);
    }
})

// MERGE A GUEST CART TO A LOGGED IN USER CART
export const mergeCart = createAsyncThunk(
    "cart/mergeCart",
    async({ guestId, user }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${import.meta,env.VITE_BACKEND_URL}/api/cart`, { guestId, user }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`
                    }
                }
            )
            return response.data
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data)
        }
    }
)

//CART SLICE
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: loadCartFromStorage(),
        loading: false,
        error: null,
    },
    reducers: {
        clearCart: (state) => {
            state.cart = { products: [] };
            localStorage.removeItem("cart");
        }
    },
    extraReducers: (builder) => {
        builder
        //FETCH CART THUNK
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
                saveCartToStorage(action.payload);
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message || "Failed to add Cart";
            })
            //ADD TO CART THUNK
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
                saveCartToStorage(action.payload);
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message || "Failed to Add To Cart";
            })
            //UPDATE CART ITEM QUANTITY THUNK
            .addCase(updateCartItemQuantity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
                saveCartToStorage(action.payload);
            })
            .addCase(updateCartItemQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message || "FAILED T UPDATE ITEM QUANTITY";
            })
            //REMOVE PRODUCT FROM CART THUNK
            .addCase(removeFromCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(removeFromCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message || "FAILED TO REMOVE ITEM FROM CART";
            })
            //MERGE CART THUNK
            .addCase(mergeCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(mergeCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(mergeCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message || "FAILED TO MERGE CART";
            });
    },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;