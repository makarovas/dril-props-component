import React from 'react'

export default function LanguagesNav({ selected, onUpdatedLanguage}) {
  const   languages = ['ALL', "JS", "GO", "Pyth"]
  return (
    <ul className='row'  >
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
