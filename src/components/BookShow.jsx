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

function BookShow({book, deleteBook}) {

    const [edit, setEdit] = useState(false)

    return (
        <Grid item >
            <Card>
                <CardContent>
                    {edit? <BookEdit /> : <Typography variant='h2'>
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
                    onClick={() => {
                        setEdit(!edit)
                    }} 
                    aria-label="edit">
                    <EditIcon />
                    </IconButton>
                </CardActions>
                
            </Card>
        </Grid>
    )
}

export default BookShow;