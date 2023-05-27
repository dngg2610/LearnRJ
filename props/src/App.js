import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div>
      <h1>{props.headerProp}</h1>
      <h2>{props.contentProp}</h2>
    </div>
  );
}

App.defaultProps = {
  headerProp: "Header from props...",
  contentProp: "Content from props..."
}



export default App;
