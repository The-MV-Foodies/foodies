import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function RecipeCard({recipes, recipe}) {
    const {name, thumbnail_url, id} = recipe;

return (
    <>
    <div className="cards">
        <Card style={{ width: '25rem', padding: '30px' }} className='mx-auto' >
          <Card.Img
           width='250'
           height='350'
          variant='top'
          src={thumbnail_url}
          />
          <Card.Title className='d-flex justify-content-center'>
          <Link to={`/${id}`} style={{ textDecoration: 'none', color:'black', padding: '20px' }}>{name}</Link>
          </Card.Title>
          
        </Card>
    </div>
  </>

)
};

export { RecipeCard };
