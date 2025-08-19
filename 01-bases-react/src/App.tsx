import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BasicTypes } from "../components/BasicTypes.tsx"

function App() {
  const [count, setCount] = useState(0)

  const onClick = () => setCount(count + 1);

  return (
    <>
      <BasicTypes />
    </>
  )
}

export default App
