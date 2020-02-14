import React, { Component } from 'react'
import PropTypes from 'prop-types'


function Instruction() {
  return (
    <div>
      <h1 className='h1'>Instruction</h1>
      <ul className='list-group row'> 
      <li className='col-sm'> 
        <h3>Enter two users</h3>
      </li>

      <li 
       className='col-sm'> 
        <h3>Battle</h3>
      </li>
      <li  className='col-sm'>
        <h3>See the winners</h3>
      </li>
      </ul>
    </div>
  )
}

class PlayerInput extends Component {
  state = {
    username: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  handleChange=(e) => {
    this.setState({
      username: e.target.value
    })
  }
  render ( ) {
    return (
     <form onSubmit={this.handleSubmit}>
        <label htmlFor="enterValue">{this.props.label}</label>
        <input 
          id='enterValue' 
          type="text" 
          className='form-control form-control-lg' 
          placeholder='Enter github username'
          autoComplete='off'

          onChange={this.handleChange}
          value={this.state.username} 
        />
          <button 
          className='btn btn-outline-secondary btn-lg' 
          disabled={!this.state.username}
          style={{marginTop: '20px'}}
          >
            Submit
          </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
export default class Battle extends Component {
  render() {
    return (
      <div className='container'>
        <Instruction/>
        <PlayerInput 
          label='Lalbe'
          onSubmit={()=> console.log('this.props.username')}
        />
      </div>
    )
  }
}
