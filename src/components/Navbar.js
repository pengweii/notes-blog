import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-header">
          <Link to="/" className="logo">
            <img src="/hammer.svg" alt="icon" />
          </Link>
          <button className="nav-toggle" onClick={toggle}>
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="nav-links">
            <li>
              <Link to="/" className="page-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/notes/" className="page-link">
                Notes
              </Link>
            </li>
            <li>
              <Link to="/blog/" className="page-link">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <ul className="nav-socials">
          <li>
            <Link to="#" className="social-link">
              github
            </Link>
          </li>
          <li>
            <Link to="#" className="social-link">
              outlook
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
