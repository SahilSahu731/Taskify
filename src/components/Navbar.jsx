import { Link, NavLink } from "react-router-dom";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-gradient-to-r from-gray-800 via-zinc-900 to-slate-800 shadow-lg border-b border-gray-600">
      {/* Left - App Name / Logo */}
      <div className="flex items-center gap-4">
        <img src="/taskify.svg" alt="Taskify Logo" className="h-8 w-8" />
        <Link to="/" className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg hover:scale-105 transition-transform">Taskify</Link>
      </div>

      {/* Middle - Navigation Links */}
      <div className="flex gap-6 text-lg font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition-colors duration-200 ${isActive ? 'bg-white bg-opacity-80 text-blue-700 shadow font-bold' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-3 py-1 rounded transition-colors duration-200 ${isActive ? 'bg-white bg-opacity-80 text-blue-700 shadow font-bold' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `px-3 py-1 rounded transition-colors duration-200 ${isActive ? 'bg-white bg-opacity-80 text-blue-700 shadow font-bold' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`
          }
        >
          Tasks
        </NavLink>
      </div>

      {/* Right - Auth Buttons */}
      <div>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-700 text-white bg-opacity-90 hover:px-14 py-2 rounded px-7 font-bold shadow hover:bg-blue-800 hover:scale-105 transition-all duration-500">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-3">
            <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: 'w-10 h-10 scale-110' } }} />
            <SignOutButton>
              <button className="bg-red-600 text-white px-4 py-2 hover:px-10 rounded font-semibold shadow hover:bg-red-700 hover:scale-105 transition-all duration-200">Sign Out</button>
            </SignOutButton>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
