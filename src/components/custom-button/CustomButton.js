import React from 'react'
import './custom-button-style.css'

const CustomButton = ({ children, isGoogleSignIn , inverted, ...otherProps }) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-btn`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;