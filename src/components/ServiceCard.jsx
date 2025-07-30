import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ServiceCard.css'

export default function ServiceCard({image, profilePic, userName, description, price, onclick}) {
  return (
    <a href={onclick} target='_blank' className='service-card'>
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={image}
          alt={image}
        />
        <CardContent style={{padding:"5px"}}>
          <Typography gutterBottom variant="h5" component="div" className='user-info'>
           <img src={profilePic} alt={profilePic} className='profile-pic'/>
           <Typography variant='body1' className='serviceCard-username'>{userName}</Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary" className='serviceCard-description' >
           {description}
          </Typography>
          <Typography variant='body1' className='serviceCard-price' >Rs{price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
  );
}