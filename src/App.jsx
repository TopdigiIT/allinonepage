import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Aboutus from './Aboutus';
import BlogPage from './Blogpage';
import Home from './Home';
import Newsletter from './Newsletter';
import ContactUs from './Contactus';
import CategoryPage from './Store';
import Phone from './Phone';
import Watch from './Watch';
import Laptop from './Laptop';
import NotFoundPage from './Notfound';
import Login from './Login';
import SellerDashboard from './SellerDashboard';
import BuyerDashboard from './BuyerDashboard';
import ProductUpload from './ProductUpload';
import AdminPage from './AdminPage';
import WhatsAppButton from './WhatsAppButton';
import Header from './Header';
import FooterSection from './Footer';







const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<> <Home /> <CategoryPage /> <Newsletter /> </>} />
        <Route path='/aboutus' element= {<Aboutus />}/>
        <Route path='/contactus' element= {<ContactUs />}/>
        <Route path='/blogs' element= {<BlogPage />}/>
        <Route path='/store' element= {<CategoryPage />}/>
        <Route path="/store:phone" element={<> <CategoryPage /> <Phone /> </>} />
        <Route path="/store:watch" element={<> <CategoryPage /> <Watch /> </>} />
        <Route path="/store:laptop" element={<> <CategoryPage /> <Laptop /> </>} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />}/>


        <Route path="seller/product-upload" element={<ProductUpload />}/>

        <Route path="admin" element={<AdminPage />}/>
        
      </Routes>
      <WhatsAppButton />
      <FooterSection />
      
    </div>
  );
};

export default App;