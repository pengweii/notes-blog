import React from "react"
import Layout from "../components/Layout"
import logo from "./images/banner.svg"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="home-top">
        <div className="home-top-left">Notes / Blog</div>
        <img src={logo} alt="banner" className="home-top-right" />
      </div>
    </Layout>
  )
}
