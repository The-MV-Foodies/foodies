
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { api_key } from '../api_key';
import { ShoppingListContext } from '../ShoppingListProvider';
import { Form, Button, FormCheck } from "react-bootstrap"


function RecipeDetails() {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);
  const [checked, setChecked] = useState(false)
  const [ingredientList, setIngredientList] = useState([])

   const { shoppingList, addToShoppingList } = useContext(ShoppingListContext)

console.log("in my shopping list: ",shoppingList)
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

  const handleSubmit= (e) => {  
    e.preventDefault();  
    setChecked(!checked)
  } 
  function handleChange(e) {  
    setChecked(!checked)
    const updatedList = [...ingredientList, e.target.name]
    setIngredientList(updatedList)
    addToShoppingList(ingredientList)
}  

  return (
    <div>
        <h1>{recipe.name}</h1>
        <h3>{recipe.description}</h3>
        <h4>Servings: {recipe.num_servings}</h4>
        <h4>Cook Time: {recipe.total_time_minutes} minutes</h4>
        <p>Ingredients:</p>
         <Form onSubmit={()=>handleSubmit()}>
        <ul>
          {recipe.sections.map((section) =>{ 
            return<>
            {section.components.map((component)=>(
                    <Form.Check 
                        value={checked}
                        onChange={(e)=> handleChange(e)}
                        label={component.raw_text}
                        name={component.raw_text} />  
            )) }
            </>
          })}
        </ul>
        <Button variant="danger" type='submit'
        onClick={() => addToShoppingList(ingredientList)}
        >Add to shopping list</Button>
            </Form>
        <p>Instructions:</p>
        <ul>
          {recipe.instructions.map((instruction) => (
            <li key={instruction.display_text}>
              <span>{instruction.display_text}</span>
            </li>
          ))}
        </ul>
        <table>
            <thead>
                <tr>
                    <th>Nutrition Facts</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Calories</td>
                    <td>{recipe.nutrition.calories}</td>
                </tr>
                <tr>
                    <td>Carbohydrates</td>
                    <td>{recipe.nutrition.carbohydrates} grams</td>
                </tr>
                <tr>
                    <td>Fat</td>
                    <td>{recipe.nutrition.fat} grams</td>
                </tr>
                <tr>
                    <td>Fiber</td>
                    <td>{recipe.nutrition.fiber} grams</td>
                </tr>
                <tr>
                    <td>Sugar</td>
                    <td>{recipe.nutrition.sugar} grams</td>
                </tr>
            </tbody>
        </table>
    </div>
  ); 
}

export { RecipeDetails };