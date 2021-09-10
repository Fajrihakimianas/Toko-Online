import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import ProductCart from './product/ProductCart';

const Cart = () => {

    const { auth, cart } = useSelector((state) => ({ ...state }));

    const getTotal = () => {
        return cart.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    const showCartItems = () => (
        <table className="table table-bordered">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Color</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
    
            {cart.map((p) => (
                <ProductCart key={p.id} p={p} />
            ))}
        </table>
    );
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <h4>Cart / {cart.length} Product</h4>

                    {!cart.length ? (
                        <p>
                        No products in cart. <Link to="/shop">Continue Shopping.</Link>
                        </p>
                    ) : (
                        showCartItems()
                    )}
                </div>

                    <div className="col-md-4">
                        <h4>Order Summary</h4>
                        <hr />
                        <p>Products</p>
                            {cart.map((c, i) => (
                                <div key={i}>
                                <p>
                                    {c.title} x {c.count} = ${c.price * c.count}
                                </p>
                                </div>
                            ))}
                        <hr />
                        Total: <b>${getTotal()}</b>
                        <hr />
                            {auth ? (
                                <button className="btn btn-sm btn-primary mt-2" disabled={!cart.length}>
                                    Proceed to Checkout
                                </button>
                            ) : (
                                <button className="btn btn-sm btn-info mt-2">
                                    <Link
                                        style={{color:'white'}}
                                        to={{
                                            pathname: "/login",
                                            state: { from: "cart" },
                                        }}
                                    >
                                        Login to Checkout
                                    </Link>
                                </button>
                            )}
                    </div>
            </div>
        </div>
    )
}

export default Cart
