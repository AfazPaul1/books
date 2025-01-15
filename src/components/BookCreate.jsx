import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function BookCreate({onCreate}) {


    const [book, setBook] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        onCreate(book)

    }


    return (
        <form onSubmit={onSubmit}>
            <Box>
                <Typography variant="h6" gutterBottom>
                    Add a Book
                </Typography>
                <TextField 
                onChange={(event) => {
                    setBook(event.target.value)
                }} 
                value={book}
                id="outlined-basic" 
                label="Title" 
                variant="outlined" />
                <Button onClick={onSubmit} variant="contained">Submit</Button>
            </Box>
        </form>
    )
}

export default BookCreate;