import React, { useState } from "react"
import Header from "./components/Header"
import Note from "./components/Note"
import Footer from "./components/Footer"
import Form from "./components/Form"
import "./App.css"


function App() {
  const [allSecrets, setAllSecrets] = useState([])

  function formSubmit(secret) {
    console.log(allSecrets)
    setAllSecrets(prevValue => {
      return [
        ...prevValue,
        secret
      ]
    })
  }

  function deleteSecret(id) {
    setAllSecrets(() => {
      return (
        allSecrets.filter(secret => {
          return (
            secret.id !== id
          )
        })
      )
    })
  }

  function editSecret(id, title, content) {
    console.log({
      id: id,
      title: title,
      content: content
    })
    let findSecret = allSecrets.findIndex(secret => secret.id == id)
    console.log("index: " + findSecret)
    setAllSecrets(prevValue =>
      prevValue.map(secret =>
        secret.id === id
          ? { ...secret, title: title, content: content }
          : secret
      )
    );
  }

  return (
    <div>
      <Header />

      <Form onSubmit={formSubmit} />

      <div className="notes-container">
        {allSecrets.map(secret =>
          <Note
            key={secret.id}
            title={secret.title}
            content={secret.content}
            id={secret.id}
            onDelete={deleteSecret}
            onEdit={editSecret}
          />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default App
