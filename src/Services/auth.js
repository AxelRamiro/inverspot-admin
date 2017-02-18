const BASE_URL = 'http://127.0.0.1:8080/api';
const TOKEN = 'token';

function getToken() {
  return localStorage.getItem(TOKEN)
}

function saveToken( token ) {
  return localStorage.setItem(TOKEN, token)
}

function requestAccess(email, password) {
  let body = JSON.stringify({ email, password})
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }
  return fetch(`${BASE_URL}/auth`, opts)
    .then( res => {
      if (res.ok) {
        return res.json().then(data => {
          saveToken(data.token)
          return true
        })
      }
      throw new Error('Datos inválidos')
    })
}

function login(email, pass) {
  // saveToken('123')
  // return true
  if ( getToken() ) return true
  return requestAccess(email, pass)
}

function logout(cb) {
  localStorage.removeItem(TOKEN)
  cb(true)
}

function isLogged() {
  return !!getToken()
}

export { login, logout, isLogged, getToken, BASE_URL }
