import './App.css';
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AuthPage from './pages/AuthPage';
import CheckoutPage from './pages/CheckoutPage';

import { auth, createUserProfileDocument } from './firebase/FirebaseUtils'
import { onSnapshot } from 'firebase/firestore';

import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions'

import { selectCurrentUser } from './redux/user/user-selectors';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;


    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapshot => {
          setCurrentUser({id: snapshot.id, ...snapshot.data()})
        })
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/auth' render={() => this.props.currentUser ? (<Redirect tp='/' />) : (<AuthPage />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
  
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
