import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CardActions, IconButton } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
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
            <Card sx={{ position: 'relative' }}>
                <CardHeader
                sx={{padding: "2px"}}
                    action={
                    <CardActions>
                        <IconButton 
                        
                        onClick={() => {
                            deleteBook(book.id)
                        }} 
                        aria-label="delete">
                        <DeleteIcon size='small'/>
                        </IconButton>
                        <IconButton 
                        
                        onClick={handleOnEdit} 
                        aria-label="edit">
                        <EditIcon size='small'/>
                        </IconButton>
                        
                    </CardActions>
                    }
                    
                />
                
                <CardMedia
                sx={{padding: '5px 10px 10px 10px',
                    boxSizing: 'border-box'
                    }}
                component="img"
                alt="green iguana"
                //to gen dif images every time to overcome cache which when we make the request to same url provides the image already in cache
                image={`https://picsum.photos/seed/${book.id}/300/200`}
                
                />
                <CardContent>
                    {edit? <BookEdit handleOnEdit={handleOnEdit} EditBookById={EditBookById} book={book}/> : <Typography variant='h2'>
                        {book.title}
                    </Typography>}
                </CardContent>
                
                
            </Card>
        </Grid>
    )
}

export default BookShow;