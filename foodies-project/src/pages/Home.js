import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { RecipeCard } from "../components/RecipeCard";

function Home({ recipes, url }) {
  const [filteredRecipe, setFilteredRecipe] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilteredRecipe(
      recipes.filter((singleRecipe) =>
        singleRecipe.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, recipes]);

    return (
      <>
      <h1>homepage</h1>
 
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
              <RecipeCard url={singleRecipe.thumbnail_url} name={singleRecipe.name} recipes={recipes} id={singleRecipe.id}/>
            </Col>
          ))}
          </Row>
          </Container>
       
          </>
        
     
    );
  }
    
    export { Home };