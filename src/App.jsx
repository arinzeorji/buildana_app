import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLayouts from './components/Layouts/UserLayouts';
import {Toaster} from 'sonner';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Profile from './components/Pages/Profile';
import CollectionPage from './components/Pages/CollectionPage';
import ProductDetails from './components/Products/ProductDetails';
import CheckOut from './components/Cart/CheckOut';
import OrderConfirmationPage from './components/Pages/OrderConfirmationPage';
import OrderDetailsPage from './components/Pages/OrderDetailsPage';
import OrdersPage from './components/Pages/OrdersPage';
import Home from './components/Pages/Home';
import AdminLayout from './components/admin/AdminLayout';
import AdminHome from './components/Pages/AdminHome';
import UserManagement from './components/admin/UserManagement';
import UsersList from './components/admin/UsersList';
import ProductManagement from './components/admin/ProductManagement';
import EditProduct from './components/admin/EditProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right"></Toaster>
      <Routes>
        <Route path="/" element={<UserLayouts />} >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="collection" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetails />} />
            
            <Route path="checkout" element={<CheckOut />} />
            <Route path="order/:id" element={<OrderDetailsPage />} />
            <Route path="order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="my-orders" element={<OrdersPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="users" element={<UsersList />} />
            <Route path="addusers" element={<UserManagement />} />
            <Route path="edituser/:id" element={<UserManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="products/:id" element={<EditProduct />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
