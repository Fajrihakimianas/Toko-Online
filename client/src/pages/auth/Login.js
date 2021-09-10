import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Login = ({history}) => {

    const [username, setUsername] = useState("mor_2314");
    const [password, setPassword] = useState("83r5^_");

    const { auth } = useSelector((state) => ({ ...state }));
    // console.log(auth.token)

    const dispatch = useDispatch();

    useEffect(() => {
        if(auth && auth.token) history.push('/')
    }, [auth, history])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username, password
        }
        const res = await axios.post(`${process.env.REACT_APP_API}/auth/login`, user);
        const {data} = res

        localStorage.setItem('token', data.token);

        dispatch({
            type:"LOGGED_IN_USER",
            payload: {
                token: data
            }
        })

    };

    const loginForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your Username"
                    autoFocus
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                />
            </div>

            <br />
            <Button
                onClick={handleSubmit}
                type="primary"
                className="mb-3"
                block
                shape="round"
                icon={<MailOutlined />}
                size="large"
                disabled={!username || password.length < 6}
            >
                Login with Username/Password
            </Button>
        </form>
    );

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Login</h4>
                    {loginForm()}
                </div>
            </div>
        </div>
    );
};

export default Login;