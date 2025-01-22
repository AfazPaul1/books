import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BookShow from './BookShow';
import useBooksContext from '../hooks/useBooksContext';

function BookList() {
    
    const { books } = useBooksContext()

    return (
        <Grid container spacing = {2} columns = {1}>
            {books.map((book) => {
                return <BookShow book={book} key = {book.id} ></BookShow>
            })}
        </Grid>
    )
}

export default BookList;