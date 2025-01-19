import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import Grid from '@mui/material/Grid2';
import axios from 'axios'

function App() {
  const [books, setBooks] = useState([])

  const handleCreate = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    })
    
    setBooks([...books, response.data])
  }

  const EditBookById = (id, newTitle) => {
    setBooks(books.map((book) => {
      //not adding return here caused the BookList.jsx:15 Uncaught TypeError: Cannot read properties of undefined (reading 'id')
      //at BookList.jsx:15:112 error and crashd the app
      // JavaScript interprets this as a function with no explicit return value. As a result, the function implicitly returns undefined.
      //The map method constructs a new array by collecting the return values of the callback function. Since all return values are undefined, the resulting array is [undefined, undefined, ...].
      return book.id = id? {...book, title: newTitle} : book
    }))
  }

  const deleteBook = (id) => {


    console.log(id);
    
    setBooks(books.filter((book) => {
      return book.id !== id
    }))
    

  }

  return (
    <Grid container spacing={2}>
      {books.length}
      <BookCreate onCreate={handleCreate}>
      </BookCreate>
      <BookList EditBookById={EditBookById} books={books} deleteBook={deleteBook}/>
      
    </Grid>
      
      
    
    
  )
}

export default App
