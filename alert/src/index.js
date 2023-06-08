import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

function Alert(props) {
  return <div >
    <button onClick={() => alert(props.text)}>Click me</button>
  </div>
}

root.render(
  <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
