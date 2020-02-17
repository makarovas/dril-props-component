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
        <li  
        className='col-sm'>
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
    this.setState({
      username: ''
    })
  }

  handleChange=(e) => {
    this.setState({
      username: e.target.value
    })
  }
  render ( ) {
    return (
      <div className="">
        <form 
          className='form-group d-flex flex-row'
          onSubmit={this.handleSubmit}>
            <label htmlFor="enterValue">{this.props.label}</label>
            <input 
              id='enterValue' 
              type="text" 
              className='form-control form-control-lg p-2' 
              placeholder={this.props.placeholder}
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
      </div>
    )
  }
}

PlayerInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}


class Players extends Component  {
  state = {
    playerOne: null,
    playerTwo: null,
  }

  render() {
    const {playerOne, playerTwo} = this.state;
    return (
      <section >
      

        <h1>Players</h1>

      <div className="d-flex flex-row">
      {playerOne === null && (
        <div className='d-2'>
  <PlayerInput 
               label='PlayerOne'
              placeholder='enter name here'
              onSubmit={(player)=> this.props.handleSubmit('playerOne', player)}
         />
        </div>
         
          )}
           {playerTwo === null && (
              <div className='d-2'>
           <PlayerInput 
              label='PlayerTwo'
              placeholder='enter name here'
              onSubmit={(player)=> this.props.handleSubmit('playerTwo', player)}
         />
         </div>
          )}
      </div>
      
      </section>
    )
  }
}

export default class Battle extends Component {

  handleSubmit = (id, player) =>{
    this.setState({
      [id]: player
    })
  }


  render() {
    return (
      <div className='container'>
        <Instruction/>
        <PlayerInput 
          label='Label'
          placeholder='Enter github username'
          onSubmit={(value)=> console.log(value)}
        />
        <Players/>
      </div>
    )
  }
}
