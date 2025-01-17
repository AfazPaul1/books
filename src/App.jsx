import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import Grid from '@mui/material/Grid2';

function App() {
  const [books, setBooks] = useState([])

  //bad code

  const handleCreate = (book) => {
    //console.log(books);

    //books only has a reference to the location 
    //so when we update in place react for optimization purposes sees the same addrss and performs no ui update
    //for that reason we have to create a new array to state whenever we update it
    setBooks([...books, {id: Math.round(Math.random() * 9999 ), title:book}])
  }

  const deleteBook = (id) => {

    //have t figure out how to delete
    //rest operator fs but how do select using id should i pass the entire object?
    //my bad gotta use filter
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
        {/* it was a fucking typo it was deletBook got  */}
        {/* was wondering why it said deletebook is not a function */}
      <BookList books={books} deleteBook={deleteBook}/>
      {/* was checking props using devtools saw that list correctly recieved the function but show didnt */}
      {/* but didn check prop name next time gotta check that */}
    </Grid>
      
      
    
    
  )
}

export default App
