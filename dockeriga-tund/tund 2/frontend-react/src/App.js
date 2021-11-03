import { useState } from "react"
import './App.css';
import Fun from './components/Fun';
import Greeting from './components/Greeting';
import HomeworkComp from './components/HomeworkComp.js';

function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <>
    <div className="App">
      { show && <h1>{ magicNumber }</h1> }
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />
      <HomeworkComp numberDef='4' />
      <HomeworkComp numberDef='3' />
      <Greeting name="Enri" age="20"/>
    </div>
    </>
    
  );
}

export default App;
