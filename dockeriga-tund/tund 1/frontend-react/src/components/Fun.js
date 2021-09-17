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
      <h1>Fun counter { counter }</h1>
      <button onClick={addNumber}>Add 1</button>
      <button onClick={() => setCounter(counter - 1)}>Deduct 1</button>
      <button onClick={increaseMagicNumber}>Add { amount } to magic number</button>
      <button onClick={() => setShow(!show)}>Toggle magic number</button>
    </>
  )
}

export default Fun