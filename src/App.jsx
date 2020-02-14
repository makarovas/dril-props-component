/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import data from './json';


function Badge({ balance, name }) {
  return (
    <li>
      {name}
      <p>
        {' '}
        {balance}
        {' '}
      </p>
    </li>
  );
}

Badge.propTypes = {
  balance: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default function App() {
  return (
    <ul className="container">
      {data.map(({ _id, ...rest }) => (
        <Badge
          key={_id}
          {...rest}
        />
      ))}
    </ul>
  );
}
