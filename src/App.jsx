import Layout from './Component/Layout/Layout';
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductListingPage from "./Component/Product/ProductListingPage";
import ProductDetailsPage from "./Component/Product/ProductDetailsPage";
import Cart from "./Component/Cart/Cart";
// import Categories from "./Component/Product/Categories";
// import FeaturedProduct from "./Component/Product/FeaturedProduct";
// import NewProduct from "./Component/Product/NewProduct";
import Profile from "./Component/Profile";
import Contact from "./Component/Contact";
const App = () => {
  return (
    <>
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListingPage" element={<ProductListingPage />} />
        <Route path="/productDetailsPage" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="categories" element={<Categories />}>
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route> */}
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </Layout>
    </>
    
  );
};
export default App;
