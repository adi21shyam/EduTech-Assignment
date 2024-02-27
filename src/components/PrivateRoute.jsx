import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {

    let data=null;
    if(JSON.parse(localStorage.getItem("data")))
         data = JSON.parse(localStorage.getItem("data"));
    console.log("data");

  return (
    data ? <Outlet /> : <Navigate to='/' />
  );
}

export default PrivateRoute