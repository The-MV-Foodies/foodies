import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { api_key } from '../api_key';
import { ShoppingListContext } from '../ShoppingListProvider';
import { Form, Button, FormCheck, Card } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RecipeDetails() {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);
  const [checked, setChecked] = useState(false)
  const [ingredientList, setIngredientList] = useState([])

  const { shoppingList, addToShoppingList } = useContext(ShoppingListContext)
  const [isButtonClicked, setIsButtonClicked] = useState({});

console.log("in my shopping list: ",shoppingList)
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': api_key,
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

useEffect(() => {
  if(!params.id) return null;
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
    <Container style={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      'max-width': '100vw'
    }}>
      <Card style={{width: '100vw', height: '800px'}}>
        <Row style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-around'
        }}>
          <Col sm={6} md={8} style={{flex: 1.3}}>
            <Card.Body style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              flexDirection: 'column'
            }}>
              <Card.Title style={{textAlign: 'center'}}><h1>{recipe.name}</h1></Card.Title>
              <Card.Text style={{textAlign: 'center'}}>
                {recipe.description}
                {recipe.credits && recipe.credits.map(credit =>(
                  <p> by: {credit.name}</p>
                ))}
              </Card.Text>
            </Card.Body>
          </Col>
          <Col sm={6} md={16} style={{flex: 1}}>
            <Card.Img 
              variant="top" 
              src={recipe.thumbnail_url}
              style={{width: '100%', height: '800px'}} 
            />
          </Col>
        </Row>
      </Card>
    </Container>
    <Container>
      <Row>
        <Col  sm={6} md={8} style={{flex: 1.5}}>
          <h4 style={{paddingTop:'18px'}}>Servings: {recipe.num_servings}</h4>
          <h4>Cook Time: {recipe.total_time_minutes} minutes</h4>
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
        </Col>
        <Col sm={6} md={16} style={{flex: 1}}>
        <p style={{padding:'18px'}}>Ingredients:</p>
          <ul>
            {recipe.sections.map((section) =>{ 
              return<>
              {section.components.map((component)=>(
                  <>
                  <div style={{display:'flex', padding:'8px'}}>
                    <Button onClick={() => {
                      addToShoppingList(component.raw_text)
                      localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
                      setIsButtonClicked({...isButtonClicked, [component.raw_text]: !isButtonClicked[component.raw_text]})
                    }} style={isButtonClicked[component.raw_text] ? {backgroundColor: 'transparent', border:'none'} : {}}>
                    {isButtonClicked[component.raw_text] ? <span style={{color: 'green', fontSize:'24px'}}>&#x2713;</span> : '+'}
                    </Button>  
                    <p style={{margin:'10px'}}>{component.raw_text}</p>
                  </div>
                  </> 
              )) }
              </>
            })}
          </ul>
        </Col>
      </Row>
    </Container>
        

        
    </div>
  ); 
}

export { RecipeDetails };