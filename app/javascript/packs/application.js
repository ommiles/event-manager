/* eslint-disable no-undef */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// import Rails from '@rails/ujs'
// import Turbolinks from 'turbolinks'
// import * as ActiveStorage from '@rails/activestorage'
// import 'channels'

// Rails.start()
// Turbolinks.start()
// ActiveStorage.start()

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

// wrap the app in a <BrowserRouter> component,
// this uses the HTML5 history API to keep the UI in sync with the URL

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.querySelector('#root'),
  );
});

// confirm Webpacker is working properly
const {
  a, b, c, ...rest
} = {
  a: 1, b: 2, c: 3, d: 4, e: 5,
};
console.log(rest);
