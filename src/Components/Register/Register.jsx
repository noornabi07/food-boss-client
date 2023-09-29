import banner from '../../assets/others/authentication1.png'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { UserContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = {name: data.name, email: data.email}
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your Account Create Successfull',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate("/");
                                }
                            })

                    })
                    .catch(errors => console.log(errors));
            })
    }

    return (
        <>
            <Helmet>
                <title>Food Boss | Register</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={banner} alt="" />
                    </div>
                    <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center text-3xl font-semibold text-purple-500 mt-3'>Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body -mt-8">
                            {/* name input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <p className='text-red-600'>Name is required.</p>}
                            </div>
                            {/* photo input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <p className='text-red-600'>Photo URl is required.</p>}
                            </div>
                            {/* email input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <p className='text-red-600'>Email is required.</p>}
                            </div>

                            {/* password input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', { required: true, minLength: 6, maxLength: 8 })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && <p className='text-red-600'>Password is required.</p>}
                                {errors.password?.type === "minLength" && <p className='text-red-600'>Password must be 6 character</p>}
                                {errors.password?.type === "maxLength" && <p className='text-red-600'>Password must be less than 8 character</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <h2 className='font-semibold text-green-500 text-center -mt-4 pb-4'>Have your account? <Link className='text-purple-500 hover:text-slate-500' to="/login">Login Now</Link></h2>

                        {/* social login here */}
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;