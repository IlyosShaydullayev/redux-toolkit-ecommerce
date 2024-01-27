import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer, Navbar, Products } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/slice/productSlice";
import { useEffect } from "react";
import { HomePage, ProductInfo } from "./pages";

function App() {
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductInfo/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
