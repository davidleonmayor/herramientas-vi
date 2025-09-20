import './App.css'

import { BasicTypes } from "../components/BasicTypes.tsx"
import { ImageManager } from "../components/ImageManager"
import { Inventario } from "../components/Inventario.tsx"

function App() {
  return (
    <>
      <BasicTypes />
      <ImageManager />
      <Inventario />
    </>
  )
}

export default App
