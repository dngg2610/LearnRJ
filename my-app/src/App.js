import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", inputText: "", mode: "view" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  handleSave() {
    this.setState({ text: this.state.inputText, mode: "view" });
  }

  handleEdit() {
    this.setState({ mode: "edit" });
  }

  //Để render ra các phương thức, ta kiểm tra các thuộc tính mode
  render() {
    if (this.state.mode === "view") {
      return (
        <div>
          <p>Text: {this.state.text}</p>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Text: {this.state.text}</p>
          <input onChange={this.handleChange} value={this.state.inputText} />
          <button onClick={this.handleSave}>Save</button>
        </div>
      );
    }
  }
}


export default App;
