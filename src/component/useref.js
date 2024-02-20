// useRef, React kütüphanesinin bir parçası olan bir kancadır (hook). 
// Bu kancayı kullanarak, işlev bileşenlerinde DOM düğümlerine veya diğer değerlere erişmek ve bunları saklamak mümkündür. 
// useRef, özellikle işlev bileşenlerinde DOM düğümlerine erişim veya işlev bileşeninin yaşam döngüsü boyunca bir değeri 
// tutma gibi durumlar için kullanılır.
import React, { useRef } from 'react'

function Ref() {
  
  const inputEl = useRef(null);

  const handleClick = () => {
    inputEl.current.focus();
  }

  return (
    <div>
      <input type='text' ref={inputEl}/>
      <button className='btn' onClick={handleClick} type="button">Send</button>
    </div>
  )
}

export default Ref

