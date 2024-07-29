import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"
import { Props } from "../../models/models"



const cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s'
  }

export const CardComponent: React.FC<Props> = ({image, title, name, club, actionType, controller}: Props) => {
    return (
        <Card style={{...cardStyle}} sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 440 }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Culb: {club}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => controller({type: actionType, payload: {name, title, image, club}})}>{actionType}</Button>
        </CardActions>
      </Card>
    )
}