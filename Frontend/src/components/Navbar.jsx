import React, { useEffect, useState } from 'react';
import Login from '../components/Login';
import { useAuth } from '../context/AuthProvider';

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme ? storedTheme : "light");
  const [menuOpen, setMenuOpen] = useState(false); // ✅ State for mobile menu toggle

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    setAuthUser(null);
  };

  const navItems = (
    <>
      <li><a href='/'>Home</a></li>
      <li><a href='/books'>Books</a></li>
      <li><a href='/contact'>Contact</a></li>
      <li><a href='/about'>About</a></li>
    </>
  );

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-md z-50 dark:bg-slate-900 dark:text-white'>
      <div className="navbar p-0">
        {/* ✅ Mobile Menu Toggle Button */}
        <div className="lg:hidden mr-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 focus:outline-none">
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg> // Close Icon
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg> // Hamburger Icon
            )}
          </button>
        </div>
        <div className="navbar-start ">
  <a href='/' className='font-bold text-2xl'>BookStore</a>
</div>

        

        {/* ✅ Desktop Menu */}
        <div className="navbar-end space-x-3">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">{navItems}</ul>

          {/* ✅ Mobile Menu (Dropdown) */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-md lg:hidden">
              <ul className="flex flex-col items-center space-y-3 py-3">
                {navItems}
              </ul>
            </div>
          )}

          {/* Dark Mode Toggle */}
          <label className="swap swap-rotate">
            <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
            <svg className="swap-off h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg className="swap-on h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
            </svg>
          </label>

          {/* Auth Buttons */}
          {authUser ? (
            <button onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <button onClick={() => document.getElementById('my_modal_3').showModal()}>
                Login
              </button>
              <Login />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
