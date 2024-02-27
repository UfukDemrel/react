import React from 'react'
import classNames from 'classnames'

function Button({ variant }) {
  return (
    <div>
        <button type='button' className={classNames({
             'p-3 flex m-3 rounded-lg font-semibold' : true,
             'bg-red-700 text-white': variant === 'danger',
             'bg-green-700 text-white': variant === 'success', 
             'bg-gray-200 text-black': variant === 'light',
             'bg-orange-700 text-white': variant === 'counter',    
        })}>Button</button>
    </div>
  )
}

export default Button
