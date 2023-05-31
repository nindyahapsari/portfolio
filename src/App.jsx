import { useState } from 'react'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import SuccessPage from './components/SuccessPage'

function App() {

  const [ success, setSuccess ] = useState(false)

  return (
    <div>
      {
        success ? <SuccessPage success={success} /> : <Login setSuccess={setSuccess} />
      }
    </div>
  )
}

export default App
