import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import SuccessPage from './Pages/SuccessPage'
import ListPage from './Pages/ListPage'
import Todo from './Pages/Todo'


function App() {

  const [ success, setSuccess ] = useState(false)

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/list' element={<ListPage />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>
  )
}

export default App
