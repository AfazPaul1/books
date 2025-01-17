import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function BookShow({book}) {
    console.log(book.title)
    
    return (
        <Grid item gap>
            <Card>
                <Typography variant='h2'>
                    {book.title}
                </Typography>
            </Card>
        </Grid>
    )
}

export default BookShow;