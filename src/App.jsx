import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-red-500'>Item 1</div>
        <div className='bg-yellow-500'>Item 2</div>
        <div className='bg-green-500'>Item 3</div>
        <div className='bg-blue-500'>Item 4</div>  
      </div>
    </>
  )
}

export default App


