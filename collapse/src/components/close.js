import React, { Component } from 'react';

class Close extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 style={{ backgroundColor: 'green', margin: '10px' }}>Conditional Rendering</h1>
          <button onClick={this.props.close}>Dong gioi thieu</button>
          <p>day la phan gioi thieu</p>
        </div>
      </div>
    )
  }
}

export default Close
