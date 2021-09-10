import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {

    const {
        price,
        category
    } = product;

    return (
        <ul className="list-group mt-4">
            <li className="list-group-item">
                Price{" "}
                <span className="label label-default label-pill float-right">
                    $ {price}
                </span>
            </li>

            {category && (
                <li className="list-group-item">
                    Category{" "}
                    <Link
                        to={`/products/${category}`}
                        className="label label-default label-pill float-right"
                    >
                        {category}
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default ProductItem
