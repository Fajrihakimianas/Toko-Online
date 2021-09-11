import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const state = {
    email:'',
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    city:'',
    street:'',
    number:'',
    zipcode:'',
    phone:''
}

const Register = ({history}) => {

    const [values, setValues] = useState(state);

    const {
        email,
        username,
        password,
        firstname,
        lastname,
        city,
        street,
        number,
        zipcode,
        phone
    } = values

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const { auth } = useSelector((state) => ({ ...state }));
    // console.log(auth.token)

    const dispatch = useDispatch();

    useEffect(() => {
        let intended = history.location.state;
        if (intended) {
        return;
        } else {
            if(auth && auth.token) history.push('/')
        }
    }, [auth, history])

    const roleBasedRedirect = (res) => {
        // check if intended
        let intended = history.location.state;
        if (intended) {
            history.push(intended.from);
        } else {
            if (auth && auth.token) {
                history.push("/");
            } else {
                history.push("/login");
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            username, 
            password, 
            firstname,
            lastname,
            city,
            street,
            number,
            zipcode,
            phone
        }

        const res = await axios.post(`${process.env.REACT_APP_API}/users`, user);
        const {data} = res

        localStorage.setItem('token', data.token);

        dispatch({
            type:"LOGGED_IN_USER",
            payload: {
                token: data
            }
        })

        roleBasedRedirect(res)

    };

    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={handleChange}
                    placeholder="Your email"
                    autoFocus
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={handleChange}
                    placeholder="Your Username"
                    autoFocus
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={handleChange}
                    placeholder="Your password"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={firstname}
                    onChange={handleChange}
                    placeholder="Your firstname"
                    autoFocus
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={lastname}
                    onChange={handleChange}
                    placeholder="Your lastname"
                    autoFocus
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={handleChange}
                    placeholder="Your city"
                    autoFocus
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={street}
                    onChange={handleChange}
                    placeholder="Your street"
                    autoFocus
                />
            </div>

            <div className="form-group">
                <input
                    type="number"
                    className="form-control"
                    value={number}
                    onChange={handleChange}
                    placeholder="Your number"
                    autoFocus
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={zipcode}
                    onChange={handleChange}
                    placeholder="Your zipcode"
                    autoFocus
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                    autoFocus
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
                disabled={!username || !email || password.length < 6}
            >
                Register
            </Button>
        </form>
    );

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    {registerForm()}
                </div>
            </div>
        </div>
    );
};

export default Register;