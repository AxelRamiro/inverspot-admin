import { BASE_URL, getToken } from './auth'

function create(entity, data, upload) {
  let body = upload ? data : JSON.stringify(data)
  const opts = {
    method: 'POST',
    headers: {},
    body
  }
  opts.headers.Authorization = getToken()
  return fetch(`${BASE_URL}/${entity}`, opts)
    .then( res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(`Error en creación de ${entity}`)
    })
}

function upload(entity, data, update ) {
  let body = data
  const opts = {
    method: update ? 'PUT' : 'POST',
    headers: {},
    body
  }
  opts.headers.Authorization = getToken()
  return fetch(`${BASE_URL}/${entity}`, opts)
    .then( res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(`Error en creación de ${entity}`)
    })
}

function remove(entity, _id) {
  let body = JSON.stringify({_id})
  const opts = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }
  opts.headers.Authorization = getToken()
  return fetch(`${BASE_URL}/${entity}`, opts)
    .then( res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Error en creación de usuario')
    })
}

function edit(entity, data) {
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
  return fetch(`${BASE_URL}/${entity}`, opts)
    .then( res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Error en edición de usuario')
    })
}

function list(entity, filter, query, select) {
  filter = JSON.stringify(filter)
  query = JSON.stringify(query)
  // select = JSON.stringify(select)
  let url = `${BASE_URL}/${entity}?filter=${filter}&query=${query}&select=${select}`
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

export { create, edit, list, remove, upload }
