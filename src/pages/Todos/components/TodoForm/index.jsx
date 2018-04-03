import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import Inner from './Inner'
import TextInput from './TextInput'

class TodoForm extends React.Component {
  constructor (...args) {
    super(...args)

    this.state = {
      inputValue: ''
    }
  }

  render () {
    const { groupId, onAddClick } = this.props

    return (
      <Inner>
        <TextInput
          value={this.state.inputValue}
          onChange={(e) => {
            this.setState({ inputValue: e.target.value })
          }}
        />
        <Button
          width='20%'
          onClick={() => {
            onAddClick(groupId, this.state.inputValue)
            this.setState({ inputValue: '' })
          }}
        >
          Add Todo
        </Button>
      </Inner>
    )
  }
}

TodoForm.propTypes = {
  groupId: PropTypes.number,
  onAddClick: PropTypes.func.isRequired
}

export default TodoForm
