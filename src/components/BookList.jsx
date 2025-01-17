import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BookShow from './BookShow';
function BookList({books, deleteBook}) {
    //forgot to destrcture book from props that was a headache to resolve
    //console.log(books);
    console.log(deleteBook)

    
    return (
        <Grid container spacing = {2} columns = {1}>
            {books.map((book) => {
                return <BookShow deleteBook = {deleteBook} book={book} key = {book.id} ></BookShow>
            })}
        </Grid>
    )
}

export default BookList;