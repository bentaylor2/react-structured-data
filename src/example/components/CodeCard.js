import React, { PureComponent } from 'react';

class CodeExample extends PureComponent {
  render() {
    console.log(this.props);
    return this.props.children;
  }
}

export default CodeExample;
