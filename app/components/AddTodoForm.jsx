import React from 'react';

export default class AddTodoForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={ e => this.onSubmit(e) }>
          <input ref={ node => { this.input = node } } />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault()
    if (!this.input.value.trim()) { return }

    this.props.onSubmit(this.input.value)
    this.input.value = ''
  }
}
