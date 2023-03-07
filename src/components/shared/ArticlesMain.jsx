import React from 'react';
import Card from 'react-bootstrap/Card';
import data from './data';

function ArticlesMain(){



const listItems = data.map(productS =>
  
    <Card style={{ width: '18rem' }} key={data.id}>
      <Card.Img variant="top" src={data.IMG} />
      <Card.Body>
        <Card.Title >{data.ProductName}</Card.Title>
        <Card.Text>
          {data.stockPrice} <br/> {data.timeElapsed}
        </Card.Text>        
      </Card.Body>
    </Card>



);

return(<div>{listItems} </div>);

}

 
export default ArticlesMain;