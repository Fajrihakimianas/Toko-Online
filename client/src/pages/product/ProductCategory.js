import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Card } from 'antd';
import axios from 'axios';
import { productCategoryy, setProducts } from 'store/action/Product';

const { Meta } = Card;

const ProductCategory = () => {

    const category = window.location.pathname;
    console.log(category)
    
    const product = useSelector((state) => state);
    console.log(product)

    const dispatch = useDispatch();
    
    
    useEffect(() => {
        getProductCategory()
    }, [])

    const getProductCategory = async (category) => {
        const res = await axios.get(`${process.env.REACT_APP_API}/products/${category}`)
        console.log(res)

        const {data} = res;

        dispatch(productCategoryy(category))
    }

    const productCategory = () => {
        // return (
        //     product.map((res) => (
        //         res.category === window.location.pathname ?
        //         <Card
        //             hoverable
        //             style={{ width: 200 }}
        //             cover={<img alt="example" src={res.image} style={{height:'250px'}} />}
        //         >
        //             <Meta title={res.title} />
        //         </Card> :
        //         <Card
        //             hoverable
        //             style={{ width: 200 }}
        //             cover={<img alt="example" src={res.image} style={{height:'250px'}} />}
        //         >
        //             <Meta title={res.title} />
        //         </Card>
                
        //     ))
        // )
    }

    return (
        <div className="container">
            <div className="grid">
                {
                    productCategory()
                    // product.map(result => (
                    //     <Card
                    //         hoverable
                    //         style={{ width: 200 }}
                    //         cover={<img alt="example" src={result.image} style={{height:'250px'}} />}
                    //     >
                    //         <Meta title={result.title} />
                    //     </Card>
                    // ))
                }
            </div>
        </div>
    )
}

export default ProductCategory
