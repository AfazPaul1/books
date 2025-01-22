import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BookShow from './BookShow';
import { useContext  } from 'react';
import BooksContext from '../context/books';
function BookList() {
    
    //could haeve used this to find out structure of valuetoshare
    console.log(useContext(BooksContext));
    
    const { books } = useContext(BooksContext)
    

    return (
        <Grid container spacing = {2} columns = {1}>
            {books.map((book) => {
                return <BookShow book={book} key = {book.id} ></BookShow>
            })}
        </Grid>
    )
}

export default BookList;