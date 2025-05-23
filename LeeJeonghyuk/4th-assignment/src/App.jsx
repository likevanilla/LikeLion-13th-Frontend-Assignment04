import { useState } from 'react'
import './App.css'
import Timer from "./components/Timer"

function App() {
  const [showTimer, setShowTimer] = useState(false)

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>모달 보기</button>
    </div>
  )
}

export default App
