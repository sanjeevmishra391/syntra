import React, { Component } from 'react'
import './sign-up-style.css'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { createUserProfileDocument } from '../../firebase/FirebaseUtils'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state; 

        if(password !== confirmPassword) {
            alert('Password does not match');
            return;
        }

        try {

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                createUserProfileDocument(user, {displayName} );

                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
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
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput 
                        name='displayName' 
                        type='text' 
                        value={this.state.displayName} 
                        handleChange={this.handleChange}
                        label="Name"
                        required 
                    />

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

                    <FormInput
                        name='confirmPassword' 
                        type='password' 
                        value={this.state.confirmPassword} 
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required 
                    />

                    <CustomButton type='submit'> Sign Up </CustomButton>
                    
                </form>
                
            </div>
        )
    }
}

export default SignUp;