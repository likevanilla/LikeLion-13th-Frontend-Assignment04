import { useState } from 'react'
import './App.css'
import Timer from "./components/Timer"

function App() {
  const [showTimer, setShowTimer] = useState(false)

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)} id="button">모달 보기</button>
      {showTimer && <Timer />}
    </div>
  )
}

export default App
