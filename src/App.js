import './App.css';
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AuthPage from './pages/AuthPage';

import { auth, createUserProfileDocument } from './firebase/FirebaseUtils'
import { onSnapshot } from 'firebase/firestore';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import Fingerprint from '@mui/icons-material/Fingerprint';
// import { Tooltip, Card } from '@mui/material';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapshot => {
          this.setState({currentUser: {id: snapshot.id, ...snapshot.data()}})
        })
      }
      this.setState({currentUser: userAuth});
      console.log(this.state.currentUser);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/auth' component={AuthPage} />
        </Switch>
  
        {/* <Card variant="outlined">
        <Button variant="outlined" color="success">Hello World</Button>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <Tooltip title="Scan to login">
        <IconButton color="primary" aria-label="add to shopping cart" size="large">
          <Fingerprint color="success" fontSize="inherit"/>
        </IconButton>
        </Tooltip>
        </Card> */}
  
      </div>
    );
  }
}

export default App;
