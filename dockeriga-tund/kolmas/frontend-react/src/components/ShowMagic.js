import { useState } from "react"
import Fun from './Fun';
import Greeting from './Greeting';
import './App.css';

function ShowMagic() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      { show && <h1>{ magicNumber }</h1> }
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />
      <Greeting name="Enri" age="20"/>
    </div>
  );
}

export default ShowMagic;
