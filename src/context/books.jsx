import { createContext, useState } from "react";
import axios from 'axios'

const BooksContext = createContext();

function Provider({children}) {

  const [books, setBooks] = useState([])

  const fetchAll = async () => {
    const response = await axios.get("http://localhost:3001/books")
    setBooks(response.data)
  }

  const handleCreate = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    })
    
    setBooks([...books, response.data])
  }

  const editBookById = async (id, newTitle) => {

    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })

    setBooks(books.map((book) => {
      return book.id === id? {...book, ...response.data} : book
    }))
    
  }
  
  const deleteBookById = async (id) => {

    const response = await axios.delete(`http://localhost:3001/books/${id}`)
    
    setBooks(books.filter((book) => {
      return book.id !== response.data.id
    }))
    

  }
  
  const valueToShare = {
    books, deleteBookById, editBookById, handleCreate, fetchAll
  }

    return (
    //got an error says couldnt map over books in booklist cause undefined
    //instea d of passing valuetoshare in shared it inside an object like{valuetoshare}
    <BooksContext.Provider value = {valueToShare}>{children}</BooksContext.Provider>
)
}

export {Provider};
export default BooksContext;