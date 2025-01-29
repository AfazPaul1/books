import { useEffect, useContext  } from 'react'
import './App.css'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import Grid from '@mui/material/Grid2';
import BooksContext from './context/books'

function App() {
  
  const { fetchAll} = useContext(BooksContext)
  
  useEffect(() => {
    fetchAll()
  }, [])

  return (
    <Grid container spacing={2}>
      <BookCreate>
      </BookCreate>
      <BookList />
    </Grid>
  )
}

export default App
