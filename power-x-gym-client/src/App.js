import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ClassDetails from "./components/ClassDetails/ClassDetails/ClassDetails";
import Classes from "./components/Classes/Classes/Classes";
import Home from './components/Home/Home/Home';
import Footer from "./components/Share/Footer/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/classes/:clsId">
          <ClassDetails/>
        </Route>
        <Route path="/classes">
          <Classes/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
