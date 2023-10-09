import React from 'react';
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/Fc';
import { UserContext } from '../../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';



const SocialLogin = () => {
    const { googleSignIn } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
                fetch('https://food-boss-server-noornabi07.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    
            })
    }

    return (
        <div className='text-center pb-3'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-md btn-outline">
                <FcGoogle className='text-2xl'></FcGoogle>

            </button>
        </div>
    );
};

export default SocialLogin;