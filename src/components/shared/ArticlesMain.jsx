import React from 'react';


const product1 = [

    'IMG',
    'Kit Kat barra de chocolate',
    '3 USD per unit',
    'Candy',
    'ID 1'
    
  ];

const product2 = [

    'IMG',
    'Juicy Drop',
    '2 USD per unit',
    'Candy',
    'ID 2'
   

]

const product3 = [

    'IMG',
    'Snack picante',
    '4 USD per unit',
    'Snacks',
    'ID 3'
    

]
  
  export default function List() {
   const listproduct1 = product1.map(products1 =>
      <div>{products1}</div>);

    const listproduct2 = product2.map (products2=>
        <div>{products2}</div>);

    const listproduct3 = product3.map (products3=>
            <div>{products3}</div>);

    return <ul>{listproduct1} {listproduct2} {listproduct3}</ul>;
  }