import React from 'react';
import { Item, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

function Location(props) {
  let desc = ""
  if (props.info.activities) {
    desc = props.info.activities[0].description
  } else if (props.info.description) {
    desc = props.info.description
  }

  return (
    <Item.Group className="locations">
      <Item >
        <Item.Image size='small' src="http://pluspng.com/img-png/png-hiker-free-hiker-pictures-boy-scout-hiking-clip-art-image-1164.jpg"/>
        <Item.Content>
          <Item.Header as="h2">
            {props.info.name}
          </Item.Header>
          <Item.Meta>
            {props.info.city}
          </Item.Meta>
          <Item.Meta>
            {props.info.state}
          </Item.Meta>
          <Item.Meta>
            Latitude: {props.info.lat}
          </Item.Meta>
          <Item.Meta>
            Latitude: {props.info.lon}
          </Item.Meta>
          <Item.Description>
            Description: {desc}
          </Item.Description>
          <Button size="small" onClick={() => props.handleLocationClick(props.info)}>
            Add to Your Locations
          </Button>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

export default connect()(Location);
