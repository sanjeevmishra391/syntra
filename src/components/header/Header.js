import React from 'react'
import './header-style.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/FirebaseUtils'

const Header = ({ currentUser }) => {
    return (
        <header>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options-container' >
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {/* <Link className='option' to='/auth'>AUTH</Link> */}
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
                    : 
                    <Link className='option' to='/auth'>SIGN IN</Link>
                }
            </div>
        </header>
    )
}

export default Header;