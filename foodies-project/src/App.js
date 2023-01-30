import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { api_key } from './api_key';
import { Home } from './pages/Home';
import { RecipeCard } from './components/RecipeCard';
import { Navigation } from './components/Navigation';

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
    
         <BrowserRouter> 
         <div>
          <Navigation/>
          <Routes>
            <Route path='/home' element={<Home recipes={recipes}/>} />
            <Route path='/card' element={<RecipeCard recipes={recipes}/>} />
          </Routes>
         </div>
        </BrowserRouter>
  
  );
}

export default App;
