import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from 'store/action/Product';
import { Card, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductItem from "./ProductItem";
import _ from "lodash";

const { Meta } = Card;

const ProductDetail = () => {

    const [tooltip, setTooltip] = useState("Click to add");

    const { cart } = useSelector((state) => ({ ...state }));

    const { id } = useParams();
    let product = useSelector((state) => state.productId);
    console.log(product)

    const { image, title, description } = product;

    const dispatch = useDispatch();

    const fetchProductDetail = async (id) => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(res)

        const {data} = res
        dispatch(selectedProduct(data));
    };

    useEffect(() => {
        fetchProductDetail(id);
    }, [id]);

    const handleAddToCart = () => {
        // create cart array
        let cart = [];
        if (typeof window !== "undefined") {
            // if cart is in local storage GET it
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }

            // push new product to cart
            cart.push({
                ...product,
                count: 1,
            });
            
            // remove duplicates
            let unique = _.uniqWith(cart, _.isEqual);
            // save to local storage
            // console.log('unique', unique)
            localStorage.setItem("cart", JSON.stringify(unique));

            setTooltip("Added");

            // add to reeux state
            dispatch({
                type: "ADD_TO_CART",
                payload: unique,
            });
        }
    };

    return (
        <>  
        <div className="container-fluid">
            <div className="row pt-4">
                <div className="col-md-7">
                    <Carousel showArrows={true} autoPlay infiniteLoop>
                        {<img src={image} key={id} alt="..."/>}
                    </Carousel>
                </div>

                <div className="col-md-5">
                    <Card
                        actions={[
                            <Tooltip title={tooltip}>
                                <a onClick={handleAddToCart}>
                                    <ShoppingCartOutlined className="text-success" /> <br />
                                    Add to Cart
                                </a>
                            </Tooltip>,

                            <Link to="/">
                                <HeartOutlined className="text-info" /> <br /> Add to Wishlist
                            </Link>,
                        ]}
                    >
                        <Meta title={title} description={description} />

                        <ProductItem product={product}/>
                    </Card>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail


// <div className="ui gridd container">
//             {Object.keys(product).length === 0 ? (
//                 <div>...Loading</div>
//             ) : (
//                 <div className="ui placeholder segment">
//                     <div className="ui two column stackable center aligned gridd">
//                         <div className="ui vertical divider">AND</div>
//                         <div className="middle aligned row">
//                             <div className="column lp">
//                                 <img className="ui fluid image" src={image} />
//                             </div>
//                             <div className="column rp">
//                                 <h1>{title}</h1>
//                                 <h2>
//                                     <a className="ui teal tag label">${price}</a>
//                                 </h2>
//                                 <h3 className="ui brown block header">{category}</h3>
//                                 <p>{description}</p>
//                                 <div className="ui vertical animated button" tabIndex="0">
//                                     <div className="hidden content">
//                                         <i className="shop icon"></i>
//                                     </div>
//                                     <div className="visible content">Add to Cart</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
