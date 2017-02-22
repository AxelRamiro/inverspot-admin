import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
// Pages
import Login from './auth/Login'
import App from './app/App'
import PowerUserList from './power-users/PowerUserList'
import PowerUserForm from './power-users/PowerUserForm'
import PropertyList from './property/PropertyList'
import PropertyEdit from './property/PropertyEdit'
import UserList from './user/UserList'
import UserEdit from './user/UserEdit'
import InvestmentList from './investment/InvestmentList'
import InvestmentForm from './investment/InvestmentForm'
import BuilderList from './builder/BuilderList'
import BuilderForm from './builder/BuilderForm'
import { isLogged } from './Services/auth'
import moment from 'moment'
moment.locale('es')


function requireAuth(nextState, replace) {
  if (!isLogged()) {
    replace({
      pathname: '/login'
    })
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} onEnter={ requireAuth }>
      <Route path='properties'>
        <Route path='list' component={ PropertyList } />
        <Route path='new' component={PropertyEdit} />
        <Route path=':id/edit' component={PropertyEdit} />
      </Route>
      <Route path='power-users'>
        <Route path='list' component={PowerUserList} />
        <Route path='new' component={PowerUserForm} />
        <Route path=':id/edit' component={PowerUserForm} />
      </Route>
      <Route path='users'>
        <Route path='list' component={UserList} />
        <Route path='new' component={UserEdit} />
        <Route path=':id/edit' component={UserEdit} />
      </Route>
      <Route path='investments'>
        <Route path='list' component={InvestmentList} />
        <Route path='new' component={InvestmentForm} />
        <Route path=':id/edit' component={InvestmentForm} />
      </Route>
      <Route path='builders'>
        <Route path='list' component={BuilderList} />
        <Route path='new' component={BuilderForm} />
        <Route path=':id/edit' component={BuilderForm} />
      </Route>
    </Route>
    <Route path="/login" component={ Login } />
  </Router>,
  document.getElementById('root')
);
