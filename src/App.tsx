import React, { useState } from 'react'
import cx from 'classnames'

function App() {
  const [toggle, setToggle] = useState<boolean>(false)

  const buttonClasses = cx({
    'bg-red-500 hover:bg-red-500': !toggle,
    'bg-blue-500 hover:bg-blue-500': toggle
  })
  return (
    <div className='bg-gray-200 flex items-center justify-center h-screen'>
      <button
        className={`p-3 rounded-sm ${buttonClasses}`}
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
    </div>
  )
}

export default App
