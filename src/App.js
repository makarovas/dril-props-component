import React, {Component} from 'react';
import data from './json'

function Badge({balance, name }) {
  return (
    <li 
   >
     {name}
     <p > {balance} </p>
    </li>
  )
}

export default class App extends Component {
  render() {
    return (
      <ul className='container'>
        {data.map(({_id, ...rest})=> {
          return (
            <Badge 
            key={_id}
            {...rest}
          />
          )
      })}
      </ul>
    )
  }
}

