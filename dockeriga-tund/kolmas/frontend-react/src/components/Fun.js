import React from "react"

function Fun({ magicNumber, setMagicNumber, amount = 1, show, setShow }){
  const [counter, setCounter] = React.useState(0)

  const addNumber = () => {
    setCounter(counter + 1)
  }

  const increaseMagicNumber = () => {
    setMagicNumber(magicNumber + amount)
  }
  
  return (
    
    <>
      <h2>This is a fun game you can currently play while waiting for the developers to update this page</h2>
      <h1>Fun counter { counter }</h1>
      <button onClick={addNumber}>Add 1</button>
      <button onClick={() => setCounter(counter - 1)}>Deduct 1</button>
      <button onClick={increaseMagicNumber}>Add { amount } to magic number</button>
      <button onClick={() => setShow(!show)}>Toggle magic number</button>
    </>
  )
}
//left it in for nostalgic purposes))
export default Fun