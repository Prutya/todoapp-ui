export const set = user => localStorage.setItem('jwt', JSON.stringify(user))
export const get = () => JSON.parse(localStorage.getItem('jwt'))
export const unset = () => localStorage.removeItem('jwt')
