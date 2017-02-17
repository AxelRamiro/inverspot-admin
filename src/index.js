import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Login from './Pages/Login'
import Properties from './Pages/Properties'
import Admins from './Pages/Admins'
import Users from './Pages/Users'
import adminNew from './Pages/adminNew'
import propertyNew from './Pages/propertyNew'
import investors from './Pages/investors'
import builders from './Pages/builders'
import userNew from './Pages/userNew'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Login} />
    <Route path='/properties' component={Properties} />
    <Route path='/users' component={Users} />
    <Route path='/admins' component={Admins} />
    <Route path='/investors' component={investors} />
    <Route path='/builders' component={builders} />
    <Route path='/admins/new' component={adminNew} />
    <Route path='/properties/new' component={propertyNew} />
    <Route path='/users/new' component={userNew} />
  </Router>,
  document.getElementById('root')
);