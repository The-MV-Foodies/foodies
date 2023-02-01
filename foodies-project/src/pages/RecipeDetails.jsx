import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api_key } from '../api_key';

function RecipeDetails() {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);


  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': api_key,
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

useEffect(() => {
    fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${params.id}`, options)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        console.log("data from recipe details:",data)
      });
  }, [params.id]);

  if (!recipe) {
    return <>loading...</>;
  }


  return (
    <div>
        <h1>{recipe.name}</h1>
      {/* <img width="300" height="300" src={`https://img.pokemondb.net/artwork/large/${params.name}.jpg`} />
      <h1>{params.name}</h1>
      <p>height: {pokemon.height}</p>
      <p>weight: {pokemon.weight}</p>
      <div>
        <p>abilities:</p>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>
              <span>{ability.ability.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>types:</p>
        <ul>
          {pokemon.types.map((type) => (
            <li key={type.type.name}>
              <span>{type.type.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>stats:</p>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              <span>{stat.stat.name}: </span>
              <span>{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>*/}
    </div>
  ); 
}

export { RecipeDetails };