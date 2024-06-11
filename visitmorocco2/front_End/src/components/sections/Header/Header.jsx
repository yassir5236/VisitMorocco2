import './Header.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';





function Header() {


  const navigate = useNavigate()
  let user = JSON.parse(localStorage.getItem('user_info'))

  function Logout() {
    localStorage.removeItem("user_info")
    navigate("/login")
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  return (


    <nav className="bg-sky-600 p-4  ">
      <div className="container mx-auto flex justify-between  items-center">
        {/* Logo */}
        <div className="flex items-center">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 32 32"
            enableBackground="new 0 0 32 32"
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            className='mr-2'
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <g id="Airplane_x2C__plane_x2C__flight_x2C__takeoff">
                <g id="XMLID_102_">
                  <line
                    fill="none"
                    id="XMLID_886_"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    x1="1.5"
                    x2="5.295"
                    y1="20.71"
                    y2="19.474"
                  ></line>
                  <line
                    fill="none"
                    id="XMLID_885_"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    x1="1.5"
                    x2="7.295"
                    y1="8.728"
                    y2="6.774"
                  ></line>
                  <line
                    fill="none"
                    id="XMLID_884_"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    x1="4.529"
                    x2="10.295"
                    y1="24.652"
                    y2="22.774"
                  ></line>
                  <line
                    fill="none"
                    id="XMLID_123_"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    x1="30.4"
                    x2="30.5"
                    y1="30.5"
                    y2="30.5"
                  ></line>
                  <line
                    fill="none"
                    id="XMLID_122_"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    x1="1.5"
                    x2="28.5"
                    y1="30.5"
                    y2="30.5"
                  ></line>
                  <path
                    d="M14.398,18.689l-1.339,3.767c-0.139,0.391,0.231,0.771,0.625,0.643l1.258-0.408c0.1-0.033,0.188-0.096,0.249-0.181l5.854-8.01"
                    fill="none"
                    id="XMLID_144_"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M25.597,8.714l-5.506,1.789l-7.974-5.61c-0.126-0.096-0.29-0.116-0.442-0.066l-1.531,0.497c-0.304,0.1-0.437,0.468-0.265,0.738 l4.03,6.45l-6.115,1.986c-0.637,0.208-1.329,0.086-1.854-0.333l-1.783-1.408c-0.129-0.104-0.306-0.132-0.467-0.079l-0.97,0.314 c-0.333,0.109-0.456,0.506-0.24,0.783l1.948,2.532c1.3,1.67,3.499,2.354,5.505,1.702l19.668-6.391 c0.685-0.223,1.057-0.954,0.834-1.638C30.3,9.563,29.967,9.25,29.547,9.123l-1.632-0.458C27.152,8.451,26.349,8.47,25.597,8.714z"
                    fill="none"
                    id="XMLID_1011_"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <span className="text-white text-2xl font-bold">TravelTix</span>
        </div>


        {/* Navigation Links */}

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {
            (() => {
              const userInfo = JSON.parse(localStorage.getItem('user_info'));
              if (userInfo && userInfo.role === 'admin') {
                return (
                  <>
                    <Link to="/Dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
                    <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                    {/* <Link to="/AddDestination" className="text-white hover:text-gray-200">Add Destination</Link> */}
                    <Link to="/About" className="text-white hover:text-gray-200">About Us</Link>
                    {/* <Link to="/AddRegionForm" className="text-white hover:text-gray-200">AddRegionForm</Link> */}

                    <div className="hs-dropdown relative inline-flex">
                      <button
                        id="hs-dropdown-default"
                        type="button"
                        className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={toggleDropdown}
                      >
                        {`${user ? user.nomUtilisateur : ''}`}
                        <svg className={`hs-dropdown-open:rotate-180 size-4 ${isDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      <div className={`hs-dropdown-menu transition-[opacity,margin] duration ${isDropdownOpen ? 'opacity-100' : 'opacity-0 hidden'} min-w-60 bg-white shadow-md rounded-lg p-2 mt-2`} aria-labelledby="hs-dropdown-default">
                        <button onClick={Logout} className="flex   items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Logout</button>
                      </div>
                    </div>
                  </>
                );
              } else if (userInfo && userInfo.role === 'user') {
                return (
                  <>
                    <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                    {/* <Link to="/AddDestination" className="text-white hover:text-gray-200">Add Destination</Link> */}
                    <Link to="/About" className="text-white hover:text-gray-200">About Us</Link>
                    <Link to="/DisplayDestination" className="text-white hover:text-gray-200">Destination</Link>
                    <Link to="/DisplayActivity" className="text-white hover:text-gray-200">Activity</Link>


                    <div className="hs-dropdown relative inline-flex">
                      <button
                        id="hs-dropdown-default"
                        type="button"
                        className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={toggleDropdown}
                      >
                        {`${user ? user.nomUtilisateur : ''}`}
                        <svg className={`hs-dropdown-open:rotate-180 size-4 ${isDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      <div className={`hs-dropdown-menu transition-[opacity,margin] duration ${isDropdownOpen ? 'opacity-100' : 'opacity-0 hidden'} min-w-60 bg-white shadow-md rounded-lg p-2 mt-2`} aria-labelledby="hs-dropdown-default">
                        <button onClick={Logout} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Logout</button>
                      </div>
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                    <Link to="/About" className="text-white hover:text-gray-200">About Us</Link>
                    <Link to="/Register" className="text-white hover:text-gray-200">Register</Link>
                    <Link to="/Login" className="text-white hover:text-gray-200">Login</Link>
                  </>
                );
              }
            })()
          }
        </div>


        {/* Search Bar */}
        <div className="relative text-gray-600 hidden md:block">
          <input
            type="search"
            name="search"
            placeholder="Search..."
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887l-14.2-14.201c3.486-4.209,5.563-9.548,5.563-15.385C46.509,9.688,36.321,0.5,23.254,0.5 S0,9.688,0,21.968s10.188,21.468,23.254,21.468c5.837,0,11.176-2.077,15.384-5.563l14.2,14.2 c1.177,1.177,3.073,1.177,4.249,0C56.322,54.96,56.322,53.064,55.146,51.887z M23.254,37.936c-8.816,0-15.968-7.152-15.968-15.968 S14.438,6,23.254,6s15.968,7.152,15.968,15.968S32.07,37.936,23.254,37.936z" />
            </svg>
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="/" className="block text-white hover:text-gray-200">Home</a>
        <a href="/destinations" className="block text-white hover:text-gray-200">Destinations</a>
        <a href="/tours" className="block text-white hover:text-gray-200">Tours</a>
        <a href="/about" className="block text-white hover:text-gray-200">About Us</a>
        <a href="/Register" className="block text-white hover:text-gray-200">Register</a>
      </div>
    </nav >



  )
}

export default Header
