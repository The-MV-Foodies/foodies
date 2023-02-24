// import { RecipeDetails } from "./RecipeDetails"
import React, { useContext, useState } from 'react';
import { ShoppingListContext } from '../ShoppingListProvider';
import bagPlus from '../images/bag-plus.svg';
import bagX from '../images/bag-x.svg';
import {
  Col,
  Container,
  Row,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';

function ShoppingList() {
  const { removeFromShoppingList } = useContext(ShoppingListContext);

  const [shoppedFor, setShoppedFor] = useState([]);

  const handleShoppedFor = (item) => {
    setShoppedFor([...shoppedFor, item]);
  };

  let newList = JSON.parse(localStorage.getItem('shoppingList'));

  function deleteItem(i) {
    newList.splice(newList.indexOf(i), 1);
    localStorage.setItem('shoppingList', JSON.stringify(newList));
    removeFromShoppingList(i);
  }

  return (
    <>
      <h1 className="text-center">Shopping List</h1>
      <Container>
        <Row className="g-4">
          <Col className="border-end">
            <h3>To Be Shopped For:</h3>
            {newList.map((listItem) => (
              <Row className="g-4">
                <div
                  className="d-inline-flex"
                  style={{ display: 'flex', padding: '8px' }}
                >
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '18px',
                    }}
                  >
                    {' '}
                    {listItem}
                  </p>
                  <div
                    className="d-inline-flex"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px',
                    }}
                  >
                    <OverlayTrigger
                      key={listItem}
                      overlay={
                        <Tooltip>Add to completed list?</Tooltip>
                      }
                    >
                      <img
                        onClick={() => {
                          handleShoppedFor(listItem);
                          console.log(shoppedFor);
                          deleteItem(listItem);
                        }}
                        src={bagPlus}
                        alt="image of shopping bag with a plus sign in the middle"
                      />
                    </OverlayTrigger>
                  </div>
                  <div
                    className="d-inline-flex "
                    id="to-be-shopped"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px',
                    }}
                  >
                    <OverlayTrigger
                      key={listItem}
                      overlay={
                        <Tooltip>Delete from shopping list?</Tooltip>
                      }
                    >
                      <img
                        onClick={() => deleteItem(listItem)}
                        src={bagX}
                        alt="image of shopping bag with an 'x' in the middle"
                      />
                    </OverlayTrigger>
                  </div>
                </div>
              </Row>
            ))}
          </Col>
          <Col>
            <h3>Added To My Cart:</h3>
            {shoppedFor.map((done) => (
              <Row className="g-4">
                <div
                  className="d-inline-flex"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px',
                  }}
                >
                  {done}
                </div>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { ShoppingList };
