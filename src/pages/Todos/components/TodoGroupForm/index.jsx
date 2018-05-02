import React from 'react'
import PropTypes from 'prop-types'
import Backdrop from 'components/Backdrop'
import Button from 'components/Button'
import Input from 'components/Input'
import Styled from './styled'

class TodoGroupForm extends React.Component {
  constructor (...args) {
    super(...args)

    this.state = { inputValue: '' }
  }

  render () {
    const { showCreateModal, onAddClick } = this.props

    return (
      <Backdrop active={showCreateModal}>
        <Styled>
          <Input
            value={this.state.inputValue}
            onChange={(e) => {
              this.setState({ inputValue: e.target.value })
            }}
          />
          <Button
            onClick={() => {
              onAddClick(this.state.inputValue)
              this.setState({ inputValue: '' })
            }}
          >
            Add Group
          </Button>
        </Styled>
      </Backdrop>
    )
  }
}

TodoGroupForm.propTypes = {
  showCreateModal: PropTypes.bool.isRequired,
  onAddClick: PropTypes.func.isRequired
}

export default TodoGroupForm
