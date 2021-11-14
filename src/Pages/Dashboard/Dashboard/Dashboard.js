import React from "react";
import './Dashboard.css'
import { Col, Row } from "react-bootstrap";
import {
  Switch,
  Link,

  useRouteMatch,
} from "react-router-dom";
import AddProduct from "../AdminDashboard/AddProduct/AddProduct";
import MakeAdmin from "../AdminDashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "../AdminDashboard/ManageAllOrder/ManageAllOrders";
import ManageProducts from "../AdminDashboard/ManageProducts/ManageProducts";
import DashboardHome from "../DashboardHome/DashboardHome";
import MyOrders from "../UserDashboard/MyOrders/MyOrders";
import useAuth from "../../../Hooks/useAuth";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";
import AdminRoute from "../../../AdminRoute/AdminRoute";
import Review from "../UserDashboard/Review/Review";
import Payment from "../UserDashboard/Payment/Payment";


const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const {isAdmin,user,logout}=useAuth();
  return (
    <div>
      <Row>
        <Col sx={12} md={2}>
          {
            user?.email && !isAdmin && <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {/* <li>
              <Link to={`${url}`}>Dashboard</Link>
            </li> */}

            <li>
              <Link to={`${url}/myorders`}>My Orders</Link>
            </li>
            <li>
              <Link to={`${url}/review`}>Review</Link>
            </li>
            <li>
              <Link to={`${url}/payment`}>Payment</Link>
            </li>
          </ul>
          }
          
         {
             user?.email && isAdmin && <ul>
             <li>
               <Link to={`${url}`}>Dashboard</Link>
             </li>
             <li>
               <Link to={`${url}/manageallorders`}>Manage All Orders</Link>
             </li>
             <li>
               <Link to={`${url}/manageproducts`}>Manage Products</Link>
             </li>
             <li>
               <Link to={`${url}/addproduct`}>Add A Product</Link>
             </li>
             <li>
               <Link to={`${url}/makeadmin`}>Make Admin</Link>
             </li>
           </ul>
         }
          <button onClick={logout}>Logout</button>
        </Col>

        <Col sx={12} md={10}>
        <Switch>
        <PrivateRoute exact path={path}>
          <DashboardHome></DashboardHome>
        </PrivateRoute>
        <PrivateRoute path={`${path}/myorders`}>
          <MyOrders></MyOrders>
        </PrivateRoute>
        <PrivateRoute path={`${path}/review`}>
          <Review></Review>
        </PrivateRoute>
        <PrivateRoute path={`${path}/payment`}>
          <Payment></Payment>
        </PrivateRoute>


        <AdminRoute path={`${path}/manageallorders`}>
            <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
        </AdminRoute>
      </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;