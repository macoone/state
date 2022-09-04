import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Counter from'./Counter';
import Chro from './Chro';
function App() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="App"><br />
       <button className='button' onClick={() => setShow(!show)}>
        {show ? "Hide Counter" : "Show Counter"}
      </button>
       {show && <Counter />}

    </div>
  );
}

export default App;
