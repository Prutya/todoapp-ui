import { visibilityFilterConstants } from '../constants'

export const visibilityFilter = (
  state = visibilityFilterConstants.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case visibilityFilterConstants.SET:
      return action.filter
    default:
      return state
  }
}
