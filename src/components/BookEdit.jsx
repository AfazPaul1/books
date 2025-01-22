import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext';

function BookEdit({book, handleOnEdit}) {

    const [title, setTitle] = useState("");

    const {editBookById} = useBooksContext()


    const onSubmit = (event) => {
        event.preventDefault()
        if (title) {
            editBookById(book.id, title)
            handleOnEdit()
        }
       
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container spacing = {2}>
                <Grid item>
                    <TextField 
                        onChange = {(event) => {
                        setTitle(event.target.value)
                        }}
                        value = {title} 
                        id="outlined-basic" label="Edit Title" variant="outlined" />
                </Grid>
                <Grid display="flex" alignItems="center" item xs={4}>
                    <Button onClick={onSubmit} variant="contained">Save</Button>
                </Grid>
            </Grid>

        </form>
    )
}

export default BookEdit;