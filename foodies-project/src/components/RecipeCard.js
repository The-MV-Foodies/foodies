import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { api_key } from '../api_key';

function RecipeCard({recipes, url, id}) {
    const [singleRecipe, setSingleRecipe] = useState(null);

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': api_key,
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };

    useEffect(() => {
        fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`, options)
          .then((res) => res.json())
          .then((data) => {
            console.log("data is",data)
            setSingleRecipe(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [id]);
  console.log(singleRecipe)
return (

    <>

    <h1>recipeCard Page</h1>
    <div className='cards'> 

    {recipes.map((singleRecipe) => (
 
            <Card style={{ width: '18rem' }} className='mx-auto' border="danger">
                <Card.Img
                width='286'
                height='286'
                variant='top'
                src={singleRecipe.thumbnail_url}
                />
                <Card.ImgOverlay>
                <Card.Title>
                <Link to={`/${singleRecipe.id}`}>{singleRecipe.name}</Link>
                </Card.Title>
                </Card.ImgOverlay>
            </Card>        
            )) }  
     </div>
     </>

)
};

export { RecipeCard };