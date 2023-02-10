
// import { RecipeDetails } from "./RecipeDetails"
import { useContext } from "react"
import { ShoppingListContext } from "../ShoppingListProvider";
import { Col, Container, Row } from 'react-bootstrap';


function ShoppingList (){
    const { shoppingList, removeFromShoppingList } = useContext(ShoppingListContext);
    console.log(shoppingList)
    let newList = JSON.parse(localStorage.getItem("shoppingList"))
    console.log("newlist: ",newList)
    console.log("shoppingList: ",shoppingList)
    function deleteItem(i){
        console.log("i is: ", i)
        newList.splice(newList.indexOf(i), 1);
        localStorage.setItem("shoppingList", JSON.stringify(newList));
        removeFromShoppingList(i)
        };

    return(
        <>
        <h1 className="text-center">Shopping List</h1>
        <Container>
        <Row className='g-4'>
        {newList.map((listItem)=>(
            <div className="d-inline-flex">
                <button style={{height:"10px", paddingBottom:"30px"}} className="btn btn-danger btn-sm text-center" onClick={()=> deleteItem(listItem)}>-</button>
                <h3>{listItem}</h3>
            </div>
        ))}
     
        </Row>
        </Container>
        </>
    )
}

export { ShoppingList }