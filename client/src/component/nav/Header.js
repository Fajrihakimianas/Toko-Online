import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  UserAddOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const { Item } = Menu;

const Header = () => {
    
    const [current, setCurrent] = useState("home");

    const { auth, cart } = useSelector((state) => ({ ...state }));
    // console.log(auth.token)

    const dispatch = useDispatch();
    let history = useHistory();

    const userLogout = () => {
        if(auth && auth.token)
        localStorage.clear();
        dispatch({
            type: "LOGOUT",
            payload: null,
        });
        history.push('/login')
    }

    const handleClick = (e) => {
        // console.log(e.key);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Item key="home" icon={<AppstoreOutlined />}>
                <Link to='/'>
                    Online Store
                </Link>
            </Item>

            <Item key="cart" icon={<ShoppingCartOutlined />}>
                    <Badge count={cart.length} offset={[9, 0]}>
                        <Link to="/cart">
                            Cart
                        </Link>
                    </Badge>
            </Item>

            {
                !auth && (
                    <>
                        <Item key="register" icon={<UserAddOutlined />} className="float-right">
                            <Link to='/register'>
                                Register
                            </Link>
                        </Item>

                        <Item key="login" icon={<UserOutlined />} className="float-right">
                            <Link to='/login'>
                                Login
                            </Link>
                        </Item>
                    </>
                )
            }

            {
                auth && (
                    <Item key="login" icon={<UserOutlined />} onClick={userLogout} className="float-right">
                        Logout
                    </Item>
                )
            }
        </Menu>
    );
};

export default Header;