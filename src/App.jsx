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


  //ok with this editbook when i clickedit and type the new name and submit
  // ir correctly shows the updated name but it adds the same component agan and again for the length of books and after that rest are shown
  //even in react dev tools it doesnt show up since same id?
  //ok now i edited the last comp now every comp has the same id in dev tools
  //but after some time it changes to show correct edited id and the rest but those componenets still stay
  //so what is happening?
  const EditBookById = async (id, newTitle) => {

    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })

    setBooks(books.map((book) => {
      //ok the error was i used = instead of ===
      //so what this did was went over every book and assigned it the id and changed state for them all to response
      //this made all those components the same thing
      //when i change code causing a rerender the fetch all useffect runs and add those again to the state but retains those duplicate componenets
      return book.id === id? {...book, ...response.data} : book
    }))
    
  }
  

  const deleteBook = (id) => {


    console.log(id);
    
    setBooks(books.filter((book) => {
      return book.id !== id
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
