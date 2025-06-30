import { createSlice, createAsyncThunk } from "reducjs/toolkit";
import axios from "axios";

//FETCH ALL USERS
export const fetchUsers = createAsyncThunk(
    "admin/fetchUsers", async() => {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`
                }
            }
        )

        return response.data;
    }
)

//ADMIN ADD USER THUNK
export const addUser = createAsyncThunk(
    "admin/addUser",
    async(userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
                userData, {
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

//ADMIN UPDATE USER INFO
export const updateUser = createAsyncThunk(
    "admin/updateUser",
    async({ id, name, email, role }, { rejectWithValue }) => {
        const response = await axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`, { name, email, role }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`
                }
            }
        )
        return response.data;
    }
)

//ADMIN DELETE USER
export const deleteUser = createAsyncThunk(
    "admin/deleteUser",
    async(userId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${userId}`, {
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


//ADMIN SLICE
const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        }).addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }).addCase(updateUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            const updatedUser = action.payload;
            const userIndex = state.users.findIndex(
                (user) => user._id === updatedUser._id);
            if (userIndex !== -1) {
                state.users[userIndex] = updatedUser;
            }
        }).addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }).addCase(deleteUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.filter(
                (user) => user._id !== action.payload);
        }).addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }).addCase(addUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload.user);
        }).addCase(addUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
    }
})


export default adminSlice.reducer