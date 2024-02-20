import React, { useState } from 'react'

function Counter() {

  const [counter, setCounter] = useState(0);

  return (
    <div>
        <h1>Tıklanan sayı {counter}</h1>
        <button className="btn btn-dark" onClick={() => setCounter(counter + 1)}>Click Me</button>
    </div>
  )
}

export default Counter
