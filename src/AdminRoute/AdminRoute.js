import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const {user,isAdmin, isAdminLoading}=useAuth();
    if(isAdminLoading){return <Spinner animation="border" variant="info" />}
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && isAdmin? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;