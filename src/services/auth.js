const userKey = 'user'

export const setUser = (user) => {
  console.log('Setting user')
  console.log(user)

  return localStorage.setItem(userKey, JSON.stringify(user))
}

export const getUser = () => {
  console.log('Getting user')
  const user = JSON.parse(localStorage.getItem(userKey))
  console.log(user)
  
  return user
}

export const unsetUser = () => {
  console.log('Removing user')

  return localStorage.removeItem(userKey)
}
