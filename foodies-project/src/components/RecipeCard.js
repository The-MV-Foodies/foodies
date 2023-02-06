import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { api_key } from '../api_key';

function RecipeCard({recipes, recipe}) {
    const [singleRecipe, setSingleRecipe] = useState(null);
    const {name, thumbnail_url, id} = recipe;


    // const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': api_key,
    //       'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    //     }
    //   };

    // useEffect(() => {
    //     fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`, options)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log("data is",data)
    //         setSingleRecipe(data);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }, [id]);
    //   if(!singleRecipe)return <div>Loading...</div>
return (
    <>
    <div className="cards">
        <Card style={{ width: '18rem' }} className='mx-auto'>
          <Card.Img
          width='286'
          height='286'
          variant='top'
          src={thumbnail_url}
          />
          <Card.Title className='d-flex justify-content-center'>
          <Link to={`/${id}`}>{name}</Link>
          </Card.Title>
          
        </Card>
    </div>


    {/* <div className='cards'> 

    {recipes.map((recipe) => (

            <Card style={{ width: '18rem' }} className='mx-auto' border="danger">
                <Card.Img
                width='286'
                height='286'
                variant='top'
                src={recipe.thumbnail_url}
                />
                <Card.ImgOverlay>
                <Card.Title>
                <Link to={`/${recipe.id}`}>{recipe.name}</Link>
                </Card.Title>
                </Card.ImgOverlay>
            </Card>        
            )) }  
     </div> */}
  </>

)
};

export { RecipeCard };
