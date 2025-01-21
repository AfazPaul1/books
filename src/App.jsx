import { useState, useEffect } from 'react'
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



  const EditBookById = async (id, newTitle) => {

    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })

    setBooks(books.map((book) => {
      return book.id === id? {...book, ...response.data} : book
    }))
    
  }
  

  const deleteBook = async (id) => {

    const response = await axios.delete(`http://localhost:3001/books/${id}`)
    
    setBooks(books.filter((book) => {
      return book.id !== response.data.id
    }))
    

  }

  const fetchAll = async () => {
    const response = await axios.get("http://localhost:3001/books")

    setBooks(response.data)
  }

  useEffect(() => {
    fetchAll()
  }, [])

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
