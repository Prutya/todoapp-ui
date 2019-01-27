export const host = process.env.API_BASE_URL

const get = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}

const post = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

const patch = {
  ...post,
  method: 'PATCH'
}

const destroy = {
  method: 'DELETE'
}

export const options = {
  get, post, patch, destroy
}
