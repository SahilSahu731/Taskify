import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="min-h-screen p-4">
      {/* Optional: Add a Navbar here */}
      <Outlet />
    </div>
  )
}

export default App
