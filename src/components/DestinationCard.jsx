import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const DestinationCard = ({ destination }) => {
    return (
        <Card sx={{ maxWidth: 320 ,marginLeft: 5, marginTop:5}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={require(`../images/${destination.image}`)}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {destination.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {destination.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    More
                </Button>
            </CardActions>
        </Card>
    );
};

export default DestinationCard;


