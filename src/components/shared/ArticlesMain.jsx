import React from 'react';
import Card from 'react-bootstrap/Card';
import data from './data.js';

function ArticlesMain(){


//ItemlistContainer
const listItems = data.map(productS =>
  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productS.IMG} />
      <Card.Body key={productS.id}>
        <Card.Title >{productS.ProductName}</Card.Title>
        <Card.Text>
          {productS.stockPrice} <br/> {productS.timeElapsed}
        </Card.Text>        
      </Card.Body>
    </Card>



);

return(<div>{listItems}</div>);

}

 
export default ArticlesMain;