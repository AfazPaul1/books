import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CardActions, IconButton } from '@mui/material';
import BookEdit from './BookEdit'
import { useState } from 'react';

function BookShow({book, deleteBook, EditBookById}) {

    const [edit, setEdit] = useState(false)


    //callback which toggle to not show edit component anymore after the form submit
    const handleOnEdit = (title) => {
        EditBookById(book.id, title)
        setEdit(!edit)
    }

    return (
        <Grid item >
            <Card>
                <CardContent>
                    {edit? <BookEdit handleOnEdit={handleOnEdit} EditBookById={EditBookById} book={book}/> : <Typography variant='h2'>
                        {book.title}
                    </Typography>}
                </CardContent>
                <CardActions>
                    <IconButton 
                    onClick={() => {
                        deleteBook(book.id)
                    }} 
                    aria-label="delete">
                    <DeleteIcon />
                    </IconButton>
                    <IconButton 
                    onClick={handleOnEdit} 
                    aria-label="edit">
                    <EditIcon />
                    </IconButton>
                </CardActions>
                
            </Card>
        </Grid>
    )
}

export default BookShow;