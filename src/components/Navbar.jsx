import { NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle mobile menu

  // Toggle function for mobile menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="col-span-9 bg-neutral-900 min-h-screen lg:h-screen overflow-y-auto">
      <div className="p-4">
        {/* Navbar Header */}
        <div className="navbar text-white flex justify-between items-center relative">
          <h1 className="text-xl font-semibold">My Portfolio</h1>

          {/* Hamburger Icon for mobile view */}
          <button
            onClick={toggleNav}
            className="block lg:hidden text-white focus:outline-none relative z-20"
          >
            {/* Animated Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>

          {/* Navbar Links - Mobile & Desktop */}
          <ul
            className={`navbar-links lg:flex lg:gap-5 text-sm w-full lg:w-auto transition-all duration-500 ease-in-out absolute lg:static top-full left-0 z-10 ${
              isNavOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden bg-slate-800 lg:bg-transparent w-full lg:w-auto lg:max-h-none lg:opacity-100 flex flex-col lg:flex-row lg:items-center`}
          >
            <li className="nav-item mx-2 lg:mx-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link block lg:inline text-white py-2 hover:underline ${
                    isActive ? 'text-blue-500 font-semibold' : ''
                  }`
                }
                onClick={() => setIsNavOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2 lg:mx-0">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `nav-link block lg:inline text-white py-2 hover:underline ${
                    isActive ? 'text-blue-500 font-semibold' : ''
                  }`
                }
                onClick={() => setIsNavOpen(false)}
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item mx-2 lg:mx-0">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `nav-link block lg:inline text-white py-2 hover:underline ${
                    isActive ? 'text-blue-500 font-semibold' : ''
                  }`
                }
                onClick={() => setIsNavOpen(false)}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item mx-2 lg:mx-0">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `nav-link block lg:inline text-white py-2 hover:underline ${
                    isActive ? 'text-blue-500 font-semibold' : ''
                  }`
                }
                onClick={() => setIsNavOpen(false)}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item mx-2 lg:mx-0">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link block lg:inline text-white py-2 hover:underline ${
                    isActive ? 'text-blue-500 font-semibold' : ''
                  }`
                }
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="w-full my-5 border-gray-700" />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default Navbar;
