import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import banner from '../../assets/others/authentication1.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { UserContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(UserContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your login successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    const handleValidateCaptcha = (e) => {
        const value = e.target.value;
        if (validateCaptcha(value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return (
        <>
            <Helmet>
                <title>Food Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 mt-10">
                        <img src={banner} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100 mt-20">
                        <h1 className='text-center text-3xl font-semibold text-purple-500 mt-3'>Login Now!</h1>
                        <form onSubmit={handleLogin} className="card-body -mt-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type here captcha code" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='font-semibold text-green-500 text-center -mt-4 pb-4'>New Here? <Link to="/register" className='text-purple-500 hover:text-slate-500'>Create a account</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;