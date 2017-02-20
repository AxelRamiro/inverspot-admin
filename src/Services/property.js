import { BASE_URL, getToken } from './auth'

function create(data) {
  let body = JSON.stringify(data)
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }
  opts.headers.Authorization = getToken()
  return fetch(`${BASE_URL}/property`, opts)
    .then( res => {
      if (res.ok) {
        return res.json()
      }
      console.log(res);
      throw new Error('Error en creación de usuario')
    })
}

function remove(_id) {
  let body = JSON.stringify({_id})
  const opts = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }
  opts.headers.Authorization = getToken()
  return fetch(`${BASE_URL}/property`, opts)
    .then( res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Error en creación de usuario')
    })
}

function edit(data) {
  if(!data._id) throw new Error('_id required')
  let body = JSON.stringify(data)
  const opts = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }
  opts.headers.Authorization = getToken()
  return fetch(`${BASE_URL}/property`, opts)
    .then( res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Error en edición de usuario')
    })
}

function list(filter, query, select) {
  filter = JSON.stringify(filter)
  query = JSON.stringify(query)
  // select = JSON.stringify(select)
  let url = `${BASE_URL}/property?filter=${filter}&query=${query}&select=${select}`
  let opts = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }
  opts.headers.Authorization = getToken()
  return fetch(url, opts)
    .then( res => {
      if(res.ok) {
        return res.json()
      }
      throw new Error('Error al listar')
    })
}

export { create, edit, list, remove }
