'use strict';

import React from 'react';

export default
class Component extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="blah">
        <h1>Hello {this.props.name}!</h1>
      </div>
    );
  }
}
