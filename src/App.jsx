import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

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

  return (
    <div>
      {books.length}
      <BookCreate onCreate={handleCreate}>
      </BookCreate>
      <BookList books={books} />
      
    </div>
    
  )
}

export default App
