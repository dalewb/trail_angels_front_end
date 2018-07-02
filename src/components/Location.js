import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: '300px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function Location(props) {
  
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.info.largeImage}
          title={props.info.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.info.name}
          </Typography>
          <Typography component="p">
            Price: ${props.info.salePrice}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={props.handleLocationPurchase}>
            Buy Location
          </Button>
          <Button size="small" color="primary" onClick={() => props.handleRequestClick(props.info)}>
            Create a Request
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Location.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Location);