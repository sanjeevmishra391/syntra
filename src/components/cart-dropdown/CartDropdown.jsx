import React from 'react';
import './cart-dropdown-style.scss'
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
// import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartDropdown = ({cartItems, dispatch}) => {
 const history = useHistory()
    return (
     <div className='cart-dropdown'>
         <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                : <span className='empty-message'>Your cart is empty</span>
            }
         </div>
         <CustomButton onClick={() =>{
            history.push({pathname: '/checkout'})
            dispatch(toggleCartHidden())
         } }>GO TO CHECKOUT</CustomButton>
     </div>
 )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);