
// import { RecipeDetails } from "./RecipeDetails"
import { useContext } from "react"
import { ShoppingListContext } from "../ShoppingListProvider";
import { Col, Container, Row } from 'react-bootstrap';


function ShoppingList (){
    const { shoppingList } = useContext(ShoppingListContext);
    console.log(shoppingList)
    return(
        <>
        <Container>
        <Row className='g-4'>
        {shoppingList.map((listItem)=>(
            <Col key={listItem}>
            <h3>{listItem}</h3>
            </Col>
       
        ))}
        </Row>
        </Container>
        </>
    )
}

export { ShoppingList }