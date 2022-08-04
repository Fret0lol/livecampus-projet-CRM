const APISettings = {
  token: '',
  headers: new Headers({
    'mode': 'no-cors',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  }),
  baseUrl: 'http://localhost:5000'
}


export async function getAllUsers() {
  return fetch(`${APISettings.baseUrl}/api/users`, {
    method: 'GET',
    headers: APISettings.headers
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}
