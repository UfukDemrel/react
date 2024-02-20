// useEffect, React kütüphanesinin bir parçası olan bir kancadır (hook). 
// Bu kancayı kullanarak, işlev bileşenlerinde yan etkileri (side effects) işleyebilirsiniz. 
// Yan etkiler, bileşenin render edilmesinden sonra gerçekleşen eylemlerdir ve genellikle veri alma,
// ağ çağrıları yapma, abonelikleri işleme, DOM manipülasyonu gibi işlemleri içerir.

import React, { useEffect, useState } from 'react'

function Effect() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title =`Tıklanan Sayı ${counter}`
  }, [counter]);

  return (
    <div>
        <h1>Tıklanan sayı {counter}</h1>
        <button className="btn btn-dark" onClick={() => setCounter(counter + 1)}>Click Me</button>
    </div>
  )
}

export default Effect
