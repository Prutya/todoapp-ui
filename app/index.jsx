import React from 'react'
import ReactDOM from 'react-dom'

import AddTodoForm from './components/AddTodoForm.jsx'
import styles from './scss/application.scss'

ReactDOM.render(
  <AddTodoForm onSubmit={ (text) => { console.log(`Submitted '${text}'`) } }/>,
  document.getElementById('root')
)
