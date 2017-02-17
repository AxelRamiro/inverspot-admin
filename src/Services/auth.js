const BASE_URL = 'http://127.0.0.1:8080/api';
const TOKEN = 'token';

function getToken() {
  return localStorage.getItem(TOKEN)
}

function saveToken( token ) {
  return localStorage.setItem(TOKEN, token)
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
  saveToken('123')
  return true
  // if ( getToken() ) return true
  // return requestAccess(email, pass)
}

function logout(cb) {
  localStorage.removeItem(TOKEN)
  cb(true)
}

function isLogged() {
  return !!getToken()
}

export { login, logout, isLogged }
