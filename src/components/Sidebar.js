import React from "react"
import { Link } from "gatsby"
const Sidebar = ({ isOpen }) => {
  return (
    <nav className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
      <ul className="sidebar-links">
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
    </nav>
  )
}
export default Sidebar
