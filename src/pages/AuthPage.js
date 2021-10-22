import React, { Component } from 'react'
import SignIn from '../components/sign-in/SignIn';
import SignUp from '../components/sign-up/SignUp';

class AuthPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{display: `flex`, justifyContent: 'space-around'}}>
                <SignIn />
                <SignUp />
            </div>

        )
    }
}

export default AuthPage;