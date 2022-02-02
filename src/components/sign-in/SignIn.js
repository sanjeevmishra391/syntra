import React, { Component } from 'react'
import './sign-in-style.css'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle } from '../../firebase/FirebaseUtils';
import { getAuth ,signInWithEmailAndPassword } from 'firebase/auth'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

            this.setState({
                email: '',
                password: ''
            });
        } catch (error) {
            console.log(error);
        }

        this.setState({email: '', password: ''});
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }
 
    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        name='email' 
                        type='text' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="Email"
                        required 
                    />

                    <FormInput
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Password"
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}> Sign In With Google </CustomButton>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default SignIn;