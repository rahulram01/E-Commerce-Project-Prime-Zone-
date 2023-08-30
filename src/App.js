import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import './CSS/App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Checkout from './Component/Checkout';
import Login from './Component/Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Component/Payment';
import Orders from './Component/Orders';

const promise = loadStripe(
    'pk_test_51Nj1yxSIuVLE1XhkQ80nE4OyawT2mkEeyIsCVn0Pl13inqqZQ0BINldJVOzcCWNevLguWUxO1IyMC8zQ4DjTsJcm00Cpugt1KX',
); // Replace with your actual Stripe public key

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The User is >>>> ', authUser);
      if (authUser) {
        // the user just logged in // the user was logged in....
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out....
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header /> {/* Header is common for all routes */}
        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
