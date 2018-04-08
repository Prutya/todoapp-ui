export const host = process.env.REACT_APP_HOST_API

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

export const options = {
  get, post, patch
}
