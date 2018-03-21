import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

import { todosConstants, visibilityFilterConstants } from './constants'
import { todoApp } from './reducers'

const store = createStore(todoApp)

const FilterLink = ({
  filter,
  currentFilter,
  children,
  onClick
}) => {
  if (filter === currentFilter) {
    return (
      <span>{children}</span>
    )
  }

  return (
    <a href="#"
       onClick={(e) => {
         e.preventDefault()
         onClick(filter)
       }}>
      {children}
    </a>
  )
}

const Todo = ({
  onClick,
  completed,
  title
}) => {
  return (
    <li onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}>
      {title}
    </li>
  )
}

const TodoList = ({
  todos,
  onTodoClick
}) => {
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  )
}

const AddTodo = ({
  onAddClick
}) => {
  let input

  return (
    <div>
      <input ref={node => { input = node }} />
      <button onClick={() => {
        onAddClick(input.value)
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

const Footer = ({
  visibilityFilter,
  onFilterClick
}) => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter={visibilityFilterConstants.SHOW_ALL}
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        All
      </FilterLink>
      {' '}
      <FilterLink
        filter={visibilityFilterConstants.SHOW_ACTIVE}
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        Active
      </FilterLink>
      {' '}
      <FilterLink
        filter={visibilityFilterConstants.SHOW_COMPLETED}
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        Completed
      </FilterLink>
    </p>
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
const TodoApp = ({
  todos,
  visibilityFilter
}) => {
  const visibleTodos = getVisibleTodos(todos, visibilityFilter)

  return (
    <div>
      <AddTodo onAddClick={(title) => {
        store.dispatch({
          type: todosConstants.CREATE,
          title,
          id: nextTodoId++
        })
      }}
      />
      <TodoList
        todos={visibleTodos}
        onTodoClick={(id) => {
          store.dispatch({
            type: todosConstants.TOGGLE,
            id
          })
        }}
      />
      <Footer
        visibilityFilter={visibilityFilter}
        onFilterClick={(filter) => {
          store.dispatch({
            type: visibilityFilterConstants.SET,
            filter
          })
        }}
      />
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
