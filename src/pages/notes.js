import React from "react"
import Layout from "../components/Layout"
import Left from "../components/Left"
import Center from "../components/Center"
import Right from "../components/Right"
const notes = () => {
  return (
    <Layout>
      <main className="note-container">
        <Left></Left>
        <Center></Center>
        <Right></Right>
      </main>
    </Layout>
  )
}
export default notes
