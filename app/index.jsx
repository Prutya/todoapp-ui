import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

import { todosConstants, visibilityFilterConstants } from './constants'
import { todoApp } from './reducers'

const store = createStore(todoApp)

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return (
      <span>{children}</span>
    )
  }

  return (
    <a href="#"
       onClick={(e) => {
         e.preventDefault()
         onClick()
       }}>
      {children}
    </a>
  )
}

class FilterLink extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const state = store.getState()

    return (
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={() => {
          store.dispatch({
            type: visibilityFilterConstants.SET,
            filter: props.filter
          })
        }}
      >
        {props.children}
      </Link>
    )
  }
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

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const state = store.getState()

    return (
      <TodoList
        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        onTodoClick={(id) => {
          store.dispatch({
            type: todosConstants.TOGGLE,
            id
          })
        }}
      />
    )
  }
}

const AddTodo = ({
  onAddClick
}) => {
  let input

  return (
    <div>
      <input ref={node => { input = node }} />
      <button onClick={() => {
        store.dispatch({
          type: todosConstants.CREATE,
          title: input.value,
          id: nextTodoId++
        })
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

const Footer = () => {
  return (
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
  )
}

let nextTodoId = 0
const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
)
