import logo from './logo.svg';
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
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddProduct from './Pages/AddProduct/AddProduct';
import AllOrders from './Pages/AllOrders/AllOrders';
import HomeProducts from './Pages/Home/HomeProducts/HomeProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/homeproducts">
            <HomeProducts></HomeProducts>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/addproduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/allorders">
            <AllOrders></AllOrders>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
