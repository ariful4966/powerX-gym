import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap';
import loginImage from '../../images/damir-spanic-hp3y7G7TALI-unsplash.jpg';
import googleLogo from '../../images/gogle_logo.png';
import googleName from '../../images/google_name.png';
import { getUserInfo, GET_USER_INFO } from '../../redux/actions/authAction';
import './Login.css'
import { firebaseInitilization, handleGoogleSign } from './LoginManeger';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const location = useLocation();
    const state = useSelector(state => state)
    let { from } = location.state || { from: { pathname: "/" } };

    firebaseInitilization();
    const handleSignIn = () => {
        
        handleGoogleSign()
            .then(res => {
                const resUser = {
                    name: res.displayName,
                    email: res.email,
                    picture: res.photoURL
                }
                dispatch(getUserInfo(resUser))
                if(res){
                    history.replace(from)
                }
            })
    }
    const loginBanner = `https://i5.walmartimages.com/asr/8270147b-c820-4d40-a09b-cc8eab49bba6.1ce20dd9c0eb340b21968e7dfa41d975.jpeg`;
    const loginBg = {
        background: "url(" + loginBanner + ")",
        backgroundSize: 'cover',
        height: '100vh'
    }


    return (
        <div style={loginBg} className="loginBannerOverlay">
            <Container style={{height:'100%'}}>
                <div className="login_area text-center  d-flex justify-content-center align-items-center h-100">
                    <div className="login-box shadow p-5" style={{background: '#fff'}}>
                        <div className="login_heading">
                            <div className="login_logo">
                                <h2>Power <span className="brand_color">X</span></h2>
                            </div>
                        </div>
                        <Button onClick={handleSignIn} className=" brand_bg d-flex justify-content-between align-items-center w-100">
                            <img src={googleLogo} alt="" className="google_logo me-5" />
                            <span>Login With
                                <img src={googleName} alt="" className="google_name" />
                            </span>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;