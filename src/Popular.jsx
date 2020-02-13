
import React from 'react'
import './index.css'
import LanguagesNav from './LanguagesNav'
import fetchReops from './utils/api'

export  class Popular2 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       selectedLanguage: 'ALL',
  //       repos: {},
  //       error: null,
  //       loading: true
  //   }
  //   this.isLoading = this.isLoading.bind(this)
  // }
  state = {
    selectedLanguage: 'ALL',
    repos: {},
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


    if(!this.state.repos[selectedLanguage]) {
      fetchReops(selectedLanguage)
      .then((data)=> {
        this.setState(({repos})=> ({
          repos: {
            ...repos,
            [selectedLanguage]: data
          }
        }))
      })
      .catch((error)=>{
        this.setState({
          error: error
        })
      })
    }

    // fetchReops(selectedLanguage)
    // .then((repos)=> {
    //   this.setState({
    //     repos,
    //     error: null
    //   })
    // })
    
  }

  isLoading ( ) {
      const {selectedLanguage, error, repos } = this.state;
    return !repos && error === null  
    // return repos === null && error === null
  }

  render() {
    const {selectedLanguage, error, repos } = this.state;
    return (
      <>
       <LanguagesNav 
        selected={selectedLanguage}
        onUpdatedLanguage={this.updateLanguage}
      />
      {this.isLoading() && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {
      repos && 
      <pre>{JSON.stringify(repos, null, 2)}</pre>}
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