import React from 'react'
import PropTypes from 'prop-types';


export default function LanguagesNav({ selected, onUpdatedLanguage}) {
  const   languages = ['ALL', "JS", "GO", "Pyth"]
  return (
    <ul className='row'  >
      <h1>{selected}</h1>
    {languages.map((language, i)=> {
      return (
        <li key={i} 
        className='col-lg-3'>
          <button 
            className='btn-clear nav-link' 
            onClick={()=> onUpdatedLanguage(language)}
            style={language === selected ? { color: "red"} : {color: 'black'}}
          >
          {language}
          </button>
        </li>
      )
    })}
</ul>
  )
}

LanguagesNav.propTypes = {
 selected: PropTypes.string.isRequired,
 onUpdatedLanguage: PropTypes.func.isRequired,
}