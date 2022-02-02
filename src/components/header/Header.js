import React from 'react'
import './header-style.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/FirebaseUtils'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors'

const Header = ({ currentUser, hidden }) => {
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
                <CartIcon />
            </div> 
            {
                !hidden && <CartDropdown />
            }
        </header>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);