import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../firebase';
import { AuthContext } from '../../Auth/Auth';
import '../formStyles.css';

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/addart');
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/addart' />
    }

    return (
        <div className='formContainer'>
            <h2>Add a Piece of Art</h2>
            <p>Gotta have credentials. If you aren't me, you won't get past this point. There is no way to create a user.</p>
            <form onSubmit={handleLogin}>
                <input required type='email' placeholder='Email' name='email' />
                <input required type='password' placeholder='Password' name='password' />
                <button className='formButton' type='submit'>Submit</button>
            </form>
        </div>
    )

}

export default withRouter(Login);