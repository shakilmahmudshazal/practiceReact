import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Example from './components/example'

function App() {
  const [count, setCount] = useState(2);
  return (
    <div className="App">
      countPrent = {count}
      <br/>
      here is my own code
      <h1>this is h1</h1>
      <Example setCount={setCount} countFromParent={5}>
              here is some childresn
      </Example>
    </div>
  );
}

export default App;
