import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { setAuthToken } from '../../api/authJWT';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user; 
            setAuthToken(user)
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            <div>
                <p className='text-center'>Social Login</p>
              <p className='text-center'><button className='btn btn-outline' onClick={handleGoogleSignIn}>Google SignIn</button></p>  
            </div>
        </div>
    );
};

export default SocialLogin;