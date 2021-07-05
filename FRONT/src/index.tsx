import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import UserList from './components/Users/UserList';
import UserForm from './components/Users/UserForm';
import 'bootswatch/dist/pulse/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
// import {  } from "./dashboard/DashboardNavbar";
import Sqlv from './components/Sqlv/Sqlv';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>

      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/new-user" component={UserForm} />
          <Route path="/update/:id" component={UserForm} />
          <Route path="/query" component={Sqlv} />
        </Switch>
      </div>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
