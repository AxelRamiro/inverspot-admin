import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Login from './Pages/Login'
import App from './Pages/App'
import Properties from './Pages/Properties'
import Admins from './Pages/Admins'
import Users from './Pages/Users'
import adminNew from './Pages/adminNew'
import propertyNew from './Pages/propertyNew'
import Investments from './Pages/Investments'
import builders from './Pages/builders'
import userNew from './Pages/userNew'
import investmentNew from './Pages/investmentNew'
import builderNew from './Pages/builderNew'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='properties'>
        <Route path='list' component={ Properties } />
        <Route path='new' component={propertyNew} />
      </Route>
      <Route path='admin-users'>
        <Route path='list' component={Admins} />
        <Route path='new' component={adminNew} />
      </Route>
      <Route path='users'>
        <Route path='list' component={Users} />
        <Route path='new' component={userNew} />
      </Route>
      <Route path='investments'>
        <Route path='list' component={Investments} />
        <Route path='new' component={investmentNew} />
      </Route>
      <Route path='builders'>
        <Route path='list' component={builders} />
        <Route path='new' component={builderNew} />
      </Route>
    </Route>
    <Route path="/login" component={ Login } />
  </Router>,
  document.getElementById('root')
);
