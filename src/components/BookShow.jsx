import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardActions, IconButton } from '@mui/material';

function BookShow({book, deleteBook}) {
    console.log(deleteBook)
    
    return (
        <Grid item >
            <Card>
                <CardContent>
                    <Typography variant='h2'>
                        {book.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={() => {
                        //cant figure this out
                        //get error deletbook is not a function 
                        //when i look at props for bookshow it says undefined
                        deleteBook(book.id)
                    }} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
                
            </Card>
        </Grid>
    )
}

export default BookShow;