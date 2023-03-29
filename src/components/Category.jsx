import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Category() {
    let navigate = useNavigate()
    const sendDataToProduct = e => {
        navigate(`/product/${e.target.value}`)
    }
    return (
        <div>
            <h2>select a category:</h2>
            <select name="" onChange={e => sendDataToProduct(e)} id="">
                <option value="">--choose your car--</option>
                <option value="1">honda</option>
                <option value="2">suzuki</option>
                <option value="3">yamaha</option>
            </select>
        </div>
    )
}
