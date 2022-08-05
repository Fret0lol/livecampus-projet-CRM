const APISettings = {
  token: '',
  headers: new Headers({
    'mode': 'no-cors',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  }),
  baseUrl: 'http://localhost:3000'
}


export function getAllUsers() {
  return fetch(`${APISettings.baseUrl}/api/users`, {
    method: 'GET',
    headers: APISettings.headers
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function getUserById(id) {
  return fetch(`${APISettings.baseUrl}/api/users/${id}`, {
    method: 'GET',
    headers: APISettings.headers
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function createUser(user) {
  return fetch(`${APISettings.baseUrl}/api/users`, {
    method: 'POST',
    headers: APISettings.headers,
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function modifyUser(id, user) {
  return fetch(`${APISettings.baseUrl}/api/users/${id}`, {
    method: 'PUT',
    headers: APISettings.headers,
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export async function deleteUser(id) {
  return await fetch(`${APISettings.baseUrl}/api/users/${id}`, {
    method: 'DELETE',
    headers: APISettings.headers
  })
}