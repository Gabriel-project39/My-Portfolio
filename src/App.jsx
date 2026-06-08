import { useState } from 'react'

import Beams from "./Beams";
import './Beams.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Beams
    beamWidth={3}
    beamHeight={30}
    beamNumber={20}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
</div>
          
    </>
  )
}

export default App
