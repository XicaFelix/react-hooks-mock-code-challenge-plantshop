import React, {useState} from "react";

function PlantCard({plant}) {

  const [inStock, setInStock] = useState(true)
  const {name, image, price} = plant

  function toggleInStock(){
    setInStock(!inStock);
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={toggleInStock}>In Stock</button>
      ) : (
        <button onClick={toggleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
