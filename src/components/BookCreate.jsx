import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import { useState } from 'react';
function BookCreate({onCreate}) {


    const [book, setBook] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        onCreate(book)
        setBook("")

    }


    return (
        <form onSubmit={onSubmit}>
            <Box>
                <Grid sx={{ backgroundColor: 'lightgreen', padding: 1 }} container spacing={2}>
                    <Grid sx={{ backgroundColor: 'lightblue', padding: 1 }} item size={12}>
                        <Typography variant="h6" gutterBottom>
                            Add a Book
                        </Typography>
                    </Grid>
                    <Grid  sx={{ background: 'lightyellow', padding: 1 }} container columns = {2}>
                        <Grid item xs={8} >
                            <TextField 
                            onChange={(event) => {
                                setBook(event.target.value)
                            }} 
                            value={book}
                            id="outlined-basic" 
                            label="Title" 
                            variant="outlined" />
                        </Grid>
                        <Grid display="flex" alignItems="center" item xs={4}>
                            <Button onClick={onSubmit} variant="contained">Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        
        </form>
    )
}

export default BookCreate;