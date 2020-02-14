import React, { Component } from 'react'


function Instruction() {
  return (
    <div>
      <h1 className='h1'>Instruction</h1>
      <ul className='list-group row'> 
      <li className='col-sm'> 
        <h3>Enter two users</h3>
      </li>
      <li  className='col-sm'> 
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
    username: ''
  }
  render ( ) {
    return (
      <form >
        <label htmlFor="enterValue">
          <input id='enterValue' type="text" className='orm-control form-control-lg'/>
          </label>
      </form>
    )
  }
}

export default class Battle extends Component {
  render() {
    return (
      <div className='container'>
        <Instruction/>
        <PlayerInput/>
      </div>
    )
  }
}
