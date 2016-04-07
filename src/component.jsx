'use strict';

import React from 'react';

export default
class Component extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
      </div>
    );
  }
}
