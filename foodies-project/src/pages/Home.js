import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { RecipeCard } from "../components/RecipeCard";
import home2img from "../images/home2img.png";

function Home({ recipes }) {
  const [filteredRecipe, setFilteredRecipe] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilteredRecipe(
      recipes.filter((singleRecipe) =>
        singleRecipe.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [recipes, search]);
    return (
      <>
      {/* <h1 style={{textAlign: 'center'}}>Foodies</h1> */}
      <div className= "text-center">
      <img src={home2img} alt="foodies logo for navbar" style ={{height:"300px", weight:"300px"}}/>
      </div>
        <Container>
        <Row className='mb-4'>
          <Col sm='8' md='6' className='mx-auto'>
            <InputGroup>
              <InputGroup.Text id='search'>Search</InputGroup.Text>
              <FormControl
                value={search}
                aria-label='search'
                aria-describedby='search'
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>
          <Row className='g-4'>

            {filteredRecipe.map((singleRecipe) => (
              <Col key={singleRecipe.name}>
              <RecipeCard recipe={singleRecipe} url={singleRecipe.thumbnail_url} name={singleRecipe.name} id={singleRecipe.id} />
              </Col>
            ))}
          </Row>
          </Container>

          </>
        
    );
  }
    
    export { Home };