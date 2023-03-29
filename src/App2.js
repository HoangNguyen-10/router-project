
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './components/Category'
import Product from './components/Product'
export default function App2() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Category />} />
                <Route path='/product/:categoryId' element={<Product />} />
            </Routes>

        </div>
    )
}
