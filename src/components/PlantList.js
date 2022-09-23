import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList}) {
  const listOfPlants = plantList.map((plant)=>{
    return <PlantCard key={plant.id} plant={plant}/>
  })
  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
