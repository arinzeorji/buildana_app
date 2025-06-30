import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice"
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";
import checkoutReducer from "./slice/checkoutSlice";
import orderReducer from "./slice/checkoutSlice";
import adminReducer from "./slice/checkoutSlice";
import adminOrderReducer from "./slice/adminOrderSlice";
import adminProductReducer from "./slice/adminProductSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
        checkout: checkoutReducer,
        orders: orderReducer,
        admin: adminReducer,
        adminOrders: adminOrderReducer,
        adminProducts: adminProductReducer
    }
});

export default store;