import React from 'react'
import Card from 'react-bootstrap/Card';

const Player = ({nom,equipe,nationalite,number,age,url }) => {
  return (
    <Card style={{ width: '18rem', border:'solid', marginInline: '5px', borderRadius: '5px' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          Equipe: {equipe} <br/>
          Nationalite: {nationalite}<br/>
          number: {number}<br/>
          Age: {age}<br/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;