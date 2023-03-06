import logo from './logo.svg';
import './App.css';

function App() {
  const handlerclick = () => {
    console.log('hola');
 }
 return (
  <button onclick= {()=> handlerclick()}>click</button>
  );
}

export default App;
