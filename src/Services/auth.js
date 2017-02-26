const BASE_URL = 'http://192.169.174.96:8080/api';
const TOKEN = 'token';

function getToken() {
  return localStorage.getItem(TOKEN)
}

function save( key, val ) {
  return localStorage.setItem(key, val)
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
          save(TOKEN, data.token)
          save('my', JSON.stringify(data.user))
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
  localStorage.removeItem('my')
  cb(true)
}

function recovery(email) {
  return fetch(`${BASE_URL}/auth/recovery?email=${email}`)
    .then( response => {
      if(response.ok) {
        return response.text()
      }
      throw new Error('Email no registrado')
    } )
}

function changePass(token, newPassword) {
  return fetch(`${BASE_URL}/auth/verify/${token}?password=${newPassword}`)
    .then( res => {
      if (res.ok) {
        return res.json().then(data => {
          save(TOKEN, data.token)
          save('my', JSON.stringify(data.user))
          return true
        })
      }
    } )
}

function isLogged() {
  return !!getToken()
}

export { changePass, login, logout, isLogged, getToken, recovery, BASE_URL }
