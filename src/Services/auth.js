const BASE_URL = 'http://127.0.0.1:8080/api';

function getToken() {
  return localStorage.getItem('token')
}

function saveToken( token ) {
  return localStorage.setItem('token', token)
}

function requestAccess(email, password) {
  const opts = {
    method: 'POST',
    body: {
      email,
      password
    }
  }
  return fetch(`${BASE_URL}/auth`, opts)
    .then( res => {
      if (res.ok) {
        return res.json().then(data => {
          saveToken(data.token)
          return true
        })
      }
      return false
    })
}

function login(email, pass) {
  if ( getToken() ) return true
  return requestAccess(email, pass)
}

function isLogged() {
  return !!getToken()
}

export { login, isLogged }
