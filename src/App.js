
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MenuBar from './Pages/Shared/MenuBar/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import HomeProducts from './Pages/Home/HomeProducts/HomeProducts';
import Contact from './Pages/Home/Home/Contact/Contact';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/Home/Home/PlaceOrder/PlaceOrder';
import EyeGlasses from './Pages/Home/Home/EyeGlasses/EyeGlasses';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>

          <Route exact path="/">
            <MenuBar></MenuBar>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/homeproducts">
            <HomeProducts></HomeProducts>
          </Route>
          <PrivateRoute path="/placeorder/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/eyeglasses">
            <MenuBar></MenuBar>
            <EyeGlasses></EyeGlasses>
            <Footer></Footer>
          </Route>
          <Route path="/contact">
            <MenuBar></MenuBar>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
