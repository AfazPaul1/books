import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])

  //bad code

  const handleCreate = (book) => {
    console.log(book);
    books.push({id:123, title:book})
    setBooks(books)
  }

  return (
    <div>
      {books.length}
      <BookCreate onCreate={handleCreate}>
      </BookCreate>
    </div>
    
  )
}

export default App
