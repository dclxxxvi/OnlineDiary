import React from 'react';
import { registration } from '../http/userAPI';

function Auth() {
    const signIn = async () => {
        const response = await registration();
        console.log(response);
    }

    return (  
        <div>
            SHOP
        </div>
    );
}

export default Auth;