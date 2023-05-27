import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Component } from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));
class StudentInfoComponent extends Component {
  render() {
    return (<div>
      <table style={{ border: 1 }}>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Nguyen Van A</td>
          <td>20</td>
          <td>Ha Noi</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Nguyen Van A</td>
          <td>20</td>
          <td>Ha Noi</td>
        </tr>
      </table>
    </div>)
  }
  ds() {
    const ds_HV = [
      { id: 1, name: "Hoàng Lê", age: 20, address: "Hanoi" },
      { id: 1, name: "Đại Hồ", age: 15, address: "Hanoi" },
      { id: 1, name: "Đức Nguyễn", age: 22, address: "Hanoi" },
      { id: 1, name: "Hồng Ngân", age: 18, address: "Hanoi" }

    ]
  }
}
root.render(
  <StudentInfoComponent />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
