import { combineReducers } from 'redux'
import { todosConstants, visibilityFilterConstants } from '../constants'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'

const listByFilter = combineReducers({
  all: createList(visibilityFilterConstants.SHOW_ALL),
  active: createList(visibilityFilterConstants.SHOW_ACTIVE),
  completed: createList(visibilityFilterConstants.SHOW_COMPLETED),
})

const todos = combineReducers({
  byId,
  listByFilter,
})

export default todos

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter])

  return ids.map(id => fromById.getTodo(state.byId, id))
}
