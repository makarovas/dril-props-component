
import React from 'react'
import './index.css'
import LanguagesNav from './LanguagesNav'
export  class Popular2 extends React.Component {
  state = {
    selectedLanguage: 'ALL'
  }
  


  updateLanguage = (selectedLanguage) => {
    this.setState({
      selectedLanguage
    })
  }

  render() {
    return (
      <>
        <LanguagesNav 
        selected={this.state.selectedLanguage}
        onUpdatedLanguage={this.updateLanguage}
        />
      </>
    )
  }
}
 


// export default function Popular (){
//   const languages = ['All', "JS", "GO", "Pyth"]
//     return (
//       <ul className='flex-center'>
//       {languages.map((item, i)=> {
//         return (
//           <li key={i}>
//             <button className='btn-clear nav-link'>
//              {item}
//             </button>
//           </li>
//         )
//       })}
//     </ul>
//     )
// }