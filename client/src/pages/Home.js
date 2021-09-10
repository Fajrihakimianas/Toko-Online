import React from 'react'
import Sidebar from 'component/nav/Sidebar'
import ProductList from './product/ProductList'

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1">
                    <Sidebar/>
                </div>
                <div className="col-11">
                    <ProductList/>
                </div>
            </div>
        </div>
    )
}

export default Home