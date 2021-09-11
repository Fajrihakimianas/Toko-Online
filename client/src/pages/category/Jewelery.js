/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Card } from 'antd';
import { EyeOutlined } from "@ant-design/icons";
import axios from 'axios';
import { setProducts } from 'store/action/Product';
import { Link } from 'react-router-dom';
import Search from 'component/form/Search';
import Sidebar from 'component/nav/Sidebar';

const { Meta } = Card;

const Jewelery = () => {
    
    const [keyword, setKeyword] = useState("");

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

    const searched = (keyword) => (result) => result.title.toLowerCase().includes(keyword);

    const jewelery = () => {
        return (
            <div className="container">
                <Search keyword={keyword} setKeyword={setKeyword}/>
                <div className="grid">
                    {
                        product.filter(searched(keyword)).map(result => {
                            if(result.category === 'jewelery'){
                                return (
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
                                        ]}
                                    >
                                            <Meta 
                                                title={result.title}
                                                description={`${result.description && result.description.substring(0, 40)}...`}
                                            />
                                    </Card>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1">
                    <Sidebar/>
                </div>
                <div className="col-11">
                    {jewelery()}
                </div>
            </div>
        </div>
    )
}

export default Jewelery