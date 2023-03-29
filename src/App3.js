import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Product from "./components/Product";


function App3() {
    return (
        <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    )
}
export default App3