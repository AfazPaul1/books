import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import Grid from '@mui/material/Grid2';

function App() {
  const [books, setBooks] = useState([])

  const handleCreate = (book) => {
   
    setBooks([...books, {id: Math.round(Math.random() * 9999 ), title:book}])
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
      <BookList books={books} deleteBook={deleteBook}/>
      
    </Grid>
      
      
    
    
  )
}

export default App
