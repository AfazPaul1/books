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
import useBooksContext from '../hooks/useBooksContext';


function BookShow({book}) {

    const [edit, setEdit] = useState(false)

    const {deleteBookById} = useBooksContext()


    //so while refactoring for context how do i handle this?
    //the issue is with toggling edit state
    //editbook isnt required here 
    //but if i didnt use that here i would have to wrap setedit and send it as a separate callback     
    //ig hats what we are doing
    const handleOnEdit = () => {
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
                            deleteBookById(book.id)
                        }} 
                        aria-label="delete">
                        <DeleteIcon size='small'/>
                        </IconButton>
                        <IconButton 
                        //ok looks like there was a bug here before this refactor on handleeditwhen i clicked on edit button a put request was made?
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
                    {edit? <BookEdit handleOnEdit={handleOnEdit} book={book}/> : <Typography variant='h2'>
                        {book.title}
                    </Typography>}
                </CardContent>
                
                
            </Card>
        </Grid>
    )
}

export default BookShow;