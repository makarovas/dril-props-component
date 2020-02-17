/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';
// import { Popular } from './components/Popular';

// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import Battle from './components/Battle';
import './index.css';

function Wrap() {
  return (
    <>
      {/* <Popular /> */}
      <Battle />
    </>
  );
}

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Wrap />, document.getElementById('root'));
