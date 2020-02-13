
import React from 'react'
import './index.css'
import LanguagesNav from './LanguagesNav'
import fetchReops from './utils/api'

export  class Popular2 extends React.Component {
  state = {
    selectedLanguage: 'ALL',
    repos: null,
    error: null,
    loading: true
  }
  
  // updateLanguage = (selectedLanguage) => {
  //   this.setState({(state)=> {
  //     return {
  //       selectedLanguage: state.selectedLanguage
  //     }
  //   }})
  // }
  componentDidMount( ) {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage = (selectedLanguage) => {
    this.setState({
      selectedLanguage,
      error: null,
      loading: false,
      repos: null
    })
    fetchReops(selectedLanguage)
    .then((repos)=> {
      this.setState({
        repos,
        loading: false,
        error: null
      })
    })
    .catch((error)=>{
      this.setState({
        error: error
      })
    })
  }
  isLoading = ( ) => {
    return this.state.repos === null && this.state.error === null
  }

  render() {
    const {selectedLanguage, error, repos, loading, } = this.state;
    return (
      <>
       <LanguagesNav 
        selected={selectedLanguage}
        onUpdatedLanguage={this.updateLanguage}
      />
      {this.isLoading() && <p>Loading...</p>}
      {error && <pre>{error}</pre>}
      {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
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