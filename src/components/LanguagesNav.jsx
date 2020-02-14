import React from 'react'
import PropTypes from 'prop-types';


export default function LanguagesNav({ selected, onUpdatedLanguage}) {
  const   languages = ['ALL', "Java", "GO", "Python", "graphql-js"]
  return (
    <ul className='column'  >
    {languages.map((language, i)=> {
      return (
        <li key={i} 
        className='col-lg-12' style={{marginBottom: '10px'}}>
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