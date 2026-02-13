import './App.css'
import NavBar from './Components/NavBar/NavComponent'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />

      <Outlet />

    </>
  )
}

export default App
