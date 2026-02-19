import './App.css'
import NavBar from './Components/NavBar/NavComponent'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/FooterComponent'

function App() {

  return (
    <>
      <NavBar />

      <Outlet />
      <Footer />
    </>
  )
}

export default App
