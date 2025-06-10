import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLayouts from './components/Layouts/UserLayouts';
// import Home from './components/Pages/Home';
import {Toaster} from 'sonner';
import Login from './components/Pages/Login';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Register from './components/Pages/Register';
import Profile from './components/Pages/Profile';
import CollectionPage from './components/Pages/CollectionPage';
import ProductDetails from './components/Products/ProductDetails';
import CheckOut from './components/Cart/CheckOut';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right"></Toaster>
      <Header />
      <Routes>
        <Route path="/" element={<UserLayouts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        
            {/* <Route element={<Home />}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
