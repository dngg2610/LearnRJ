import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Close from './components/close';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpand: false }
  }
  handleOpen = () => {
    this.setState({ isExpand: true})
  }
  handleClose = () => {
    this.setState({ isExpand: false})

  }    
  render() {
    const {isExpand} = this.state
    if(isExpand) return <Close close={this.handleClose}/>
    return <>
      <h1 style={{ backgroundColor: 'green', margin: '10px' }}>Conditional Rendering</h1>
      <button onClick={this.handleOpen}>Xem gioi thieu</button>
    </>
  }
}


export default App;
