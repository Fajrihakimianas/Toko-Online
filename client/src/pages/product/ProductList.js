import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Card } from 'antd';
import { EyeOutlined } from "@ant-design/icons";
import axios from 'axios';
import { setProducts } from 'store/action/Product';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const ProductList = () => {

    const product = useSelector((state) => state.products.products);
    console.log(product)

    const dispatch = useDispatch();
    
    
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API}/products`)
        console.log(res)

        const {data} = res;

        dispatch(setProducts(data))
    }

    return (
        <div className="container">
            <div className="grid">
                {
                    product.map(result => (
                        <Card
                            hoverable
                            style={{ width: '300px' }}
                            cover={
                                <img alt="example" src={result.image} style={{height:'200px', objectFit:'contain'}} />
                            }
                            actions={[
                                <Link to={`/product/${result.id}`}>
                                    <EyeOutlined className="text-warning" /> <br /> View Product
                                </Link>
                                // <a>
                                //     <ShoppingCartOutlined className="text-danger" /> <br /> Add to Cart
                                // </a>,
                            ]}
                        >
                            <Meta 
                                title={result.title}
                                description={`${result.description && result.description.substring(0, 40)}...`}
                            />
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList
