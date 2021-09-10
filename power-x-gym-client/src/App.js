import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import jwt_decode from "jwt-decode";
import ClassDetails from "./components/ClassDetails/ClassDetails/ClassDetails";
import Classes from "./components/Classes/Classes/Classes";
import Home from './components/Home/Home/Home';
import Login from "./components/Login/Login";
import MemberShip from "./components/MemberShip/MemberShip/MemberShip";
import Pricing from "./components/Pricing/Pricing/Pricing";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfo } from "./redux/actions/authAction";
import { PrivateRoute } from "./components/Login/LoginManeger";
import { getClassesData, getPricingData, getUserOrder } from './redux/actions/dataAction'
import NoMatch from "./components/NoMatch/NoMatch";

function App() {

  const dispatch = useDispatch();
  const state = useSelector(state => state)
  console.log(state);

  useEffect(() => {
    const userToken = sessionStorage.getItem('userInfo');
    if (userToken) {
      const sessionUser = jwt_decode(userToken)
      dispatch(getUserInfo(sessionUser))
    }


    //Get Classes Data
    fetch('http://localhost:5000/classes')
      .then(res => res.json())
      .then(data => {
        dispatch(getClassesData(data))
      })
    // get Priceing data

    fetch('http://localhost:5000/prices')
      .then(res => res.json())
      .then(data => {
        dispatch(getPricingData(data))
      })

    fetch('http://localhost:5000/order?email=' + state.authReducer.email)
      .then(res => res.json())
      .then(data => {
        dispatch(getUserOrder(data))
      })

  }, [dispatch, state.authReducer.email])

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/prices/:mbrId">
          <MemberShip />
        </PrivateRoute>
        <Route path="/prices">
          <Pricing />
        </Route>
        <Route path="/classes/:clsId">
          <ClassDetails />
        </Route>
        <Route path="/classes">
          <Classes />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
