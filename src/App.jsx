import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])

  const handleCreate = (book) => {
    console.log(book);
    
    setBooks([...books, book])
  }

  return (
    <BookCreate onCreate={handleCreate}>
    </BookCreate>
  )
}

export default App
