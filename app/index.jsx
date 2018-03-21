import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

import { todosConstants, visibilityFilterConstants } from './constants'
import { todoApp } from './reducers'

const store = createStore(todoApp)

const FilterLink = ({
  filter,
  children
}) => {
  return (
    <a href="#"
       onClick={(e) => {
         e.preventDefault()
         store.dispatch({
           type: visibilityFilterConstants.SET,
           filter
         })
       }}>
      {children}
    </a>
  )
}

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case visibilityFilterConstants.SHOW_ALL:
      return todos
    case visibilityFilterConstants.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case visibilityFilterConstants.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

let nextTodoId = 0;
class TodoApp extends React.Component {
  render() {
    const visibleTodos = getVisibleTodos(
      this.props.todos,
      this.props.visibilityFilter
    )
    return (
      <div>
        <input ref={node => {
            this.input = node
        }} />
        <button onClick={() => {
          store.dispatch({
            type: todosConstants.CREATE,
            text: this.input.value,
            id: nextTodoId++
          })
          this.input.value = ''
        }}>
          Add Todo
        </button>
        <ul>
          {visibleTodos.map(todo =>
            <li key={todo.id}
                onClick={() => {
                  store.dispatch({
                    type: todosConstants.TOGGLE,
                    id: todo.id
                  })
                }}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}>
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show:
          {' '}
          <FilterLink filter={visibilityFilterConstants.SHOW_ALL}>
            All
          </FilterLink>
          {' '}
          <FilterLink filter={visibilityFilterConstants.SHOW_ACTIVE}>
            Active
          </FilterLink>
          {' '}
          <FilterLink filter={visibilityFilterConstants.SHOW_COMPLETED}>
            Completed
          </FilterLink>
        </p>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
