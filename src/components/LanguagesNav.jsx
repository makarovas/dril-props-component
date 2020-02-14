import React from 'react';
import PropTypes from 'prop-types';


export default function LanguagesNav({ selected, onUpdatedLanguage }) {
  const languages = ['ALL', 'Java', 'Python', 'graphql-js'];
  return (
    <ul className="row">
      {languages.map((language) => (
        <li
          key={Math.random()}
          className="col-lg-12"
          style={{ marginBottom: '10px' }}
        >
          <button
            type="button"
            className="btn btn-secondary  btn-sm "
            onClick={() => onUpdatedLanguage(language)}
            style={language === selected ? { color: 'yellow' } : { color: 'white' }}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdatedLanguage: PropTypes.func.isRequired,
};
