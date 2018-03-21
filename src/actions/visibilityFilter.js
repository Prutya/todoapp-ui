import { visibilityFilterConstants } from '../constants'

const set = (filter) => {
  return {
    type: visibilityFilterConstants.SET,
    filter
  }
}

export const visibilityFilterActions = {
  set
}
