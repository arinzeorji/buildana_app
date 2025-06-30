import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

//RETRIEVE USER INFO AND TOKEN FROM localStorage if Available
const userFromStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : null;

//CHECK FOR EXISTING GUEST_ID OR GENERATE A NEW ONE
const initialGuestId = localStorage.getItem("guestId") || `guest_${new Date().getTime()}`;
localStorage.setItem("guestId", initialGuestId);

//SET INITIAL STATE VALUES
const initialState = {
    user: userFromStorage,
    guestId: initialGuestId,
    loading: false,
    error: null,
}

//ASYNC THUNK FOR USER LOGIN
export const loginUser = createAsyncThunk("auth/loginUser",
    async(userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
                userData
            );

            localStorage.setItem("userInfo", JSON.stringify(response.data.user));
            localStorage.setItem("userToken", response.data.token);

            return response.data.user; //return the user object from the response


        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }

)


//ASYNC THUNK FOR USER REFISTER
export const registerUser = createAsyncThunk("auth/registerUSer",
    async(userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
                userData
            );
            localStorage.setItem("userInfo", JSON.stringify(response.data.user));
            localStorage.setItem("userToken", response.data.token);

            return response.data.user; //return the user object from the response            
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

//AUTH SLICE
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: [],
        loading: false,
        error: null
    },
    reducers: {
        logOut: (state) => {
            state.user = null;
            state.guestId = `guest_${new Date().getTime()}` //RESET GUEST_ID AFTER LOGOUT
            localStorage.removeItem("userInfo")
            localStorage.removeItem("userToken")
            localStorage.setItem("guestId", state.guestId) //SET NEW GUEST_ID TO THE LOCAL STORAGE
        },
        generateNewGuestId: (state) => {
            state.guestId = `guest_${new Date().getTime()}`;
            localStorage.setItem("guestId", state.guestId)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message
            })
    }
})

export const { logOut, generateNewGuestId } = authSlice.actions

export default authSlice.reducer;