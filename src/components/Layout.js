import React, { Fragment } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Fragment>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} />
      <main className="content">{children}</main>
    </Fragment>
  )
}

export default Layout
