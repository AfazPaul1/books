import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BookShow from './BookShow';
function BookList({books}) {
    //forgot to destrcture book from props that was a headache to resolve
    console.log(books);
    
    return (
        <Grid container spacing = {2}>
            {books.map((book) => {
                return <BookShow book={book} key = {book.id}></BookShow>
            })}
        </Grid>
    )
}

export default BookList;