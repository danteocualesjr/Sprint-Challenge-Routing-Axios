import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './Smurf.css';

const Smurf = props => {
  console.log(props);
  return (
    <div className="smurf">
      <Card body inverse color="primary">
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.age} smurf years old</CardText>
        <CardText>{props.height} tall</CardText>
        <CardText>{props.id}</CardText>
        <Button color="secondary">Delete Smurf</Button>
      </Card>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  age: '',
  height: ''
};

export default Smurf;