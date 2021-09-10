import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { setCategory } from 'store/action/Category';

const Sidebar = () => {
    
    const category = useSelector((state) => state.category.category);
    console.log(category)
    
    const dispatch = useDispatch();

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API}/products/categories`);
        console.log(res)

        const {data} = res

        dispatch(setCategory(data))
    }

    return (
        <>
            <div className="sidebar">
                <ul className="nav flex-column">
                    <li className="nav-item mt-2">
                        <h4>Category</h4>
                    </li>
                    <div style={{marginLeft:'-14px'}}>
                        <li className="nav-item">
                            {
                                category.map(result => (
                                    <Link className="nav-link category-color" to={`/${result}`}>
                                        {result}
                                    </Link>
                                ))
                            }
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Sidebar