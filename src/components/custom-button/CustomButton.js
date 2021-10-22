import React from 'react'
import './custom-button-style.css'

const CustomButton = ({ children, isGoogleSignIn ,...otherProps }) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-btn`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;