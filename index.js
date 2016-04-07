'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Component from './src/component';

ReactDOM.render(
  React.createElement(Component, {name: 'World'}),
  document.getElementById('main'));
