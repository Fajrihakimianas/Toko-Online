import React from 'react'
import { useDispatch } from "react-redux";
import {
    CloseOutlined,
} from "@ant-design/icons";

const ProductCart = ({p}) => {

    const colors = ["Black", "Brown", "Silver", "White", "Blue"];
    let dispatch = useDispatch();

    const handleColorChange = () => {
        // 
    }

    const handleRemove = () => {
        // console.log(p._id, "to remove");
        let cart = [];
    
        if (typeof window !== "undefined") {
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
            // [1,2,3,4,5]
            cart.map((product, i) => {
                if (product.id === p.id) {
                cart.splice(i, 1);
                }
            });
        
            localStorage.setItem("cart", JSON.stringify(cart));
            dispatch({
                type: "ADD_TO_CART",
                payload: cart,
            });
        }
    };

    return (
        <tbody>
            <tr>
                <td>
                    <img src={p.image} style={{ width: "100px", height: "auto"}}/>
                </td>
                <td>{p.title}</td>
                <td>
                    <select
                        onChange={handleColorChange}
                        name="color"
                        className="form-control"
                    >
                        {p.color ? (
                        <option value={p.color}>{p.color}</option>
                        ) : (
                        <option>Select</option>
                        )}
                        {colors
                        .filter((c) => c !== p.color)
                        .map((c) => (
                            <option key={c} value={c}>
                            {c}
                            </option>
                        ))}
                    </select>
                </td>
                <td>${p.price}</td>
                <td>{p.category}</td>
                <td>
                    <CloseOutlined
                        onClick={handleRemove}
                        className="text-danger pointer"
                    />
                </td>
            </tr>
        </tbody>
    )
}

export default ProductCart
