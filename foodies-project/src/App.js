import React, { useState, useEffect } from 'react';
import { api_key } from './api_key';
function App() {
  const [recipes, setRecipes] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': api_key,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

  async function fetchItems(){
		try {
			const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
			const recipesData = await response.json();
      console.log(recipesData.results)
			
			setRecipes(recipesData.results);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems()
	}, []);
   

  

  return (
    <div className='cards'> 
    {recipes.map((singleRecipe, idx) => {
      return(
         <> 
       <div className='card' key={idx}> 
        <img style={{width: "200px", height: "300px"}} className='card-image' src={singleRecipe.thumbnail_url} alt={singleRecipe.name} />  
        </div> 
        </>
  ) } )} 
      
   </div>
  );
}

export default App;
