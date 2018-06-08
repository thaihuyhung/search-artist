import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'flex'
  },
  cardMedia: {
    width: 300,
    height: 300
  }
}

const ArtistCard = ({ detail, classes }) => {
  const name = detail.get('name');
  const imageUrl = detail.get('image_url')
  return (
    <Card classes={{root: classes.card}}>
        <CardMedia
          classes={{root: classes.cardMedia}}
          image={imageUrl}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
        </CardContent>
      </Card>
  );
};

ArtistCard.propTypes = {
  detail: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles)(ArtistCard);
