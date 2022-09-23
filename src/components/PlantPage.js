import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantList, onFilter}) {
  return (
    <main>
      <NewPlantForm plantList={plantList}/>
      <Search plantList={plantList} onFilter={onFilter}/>
      <PlantList plantList={plantList}/>
    </main>
  );
}

export default PlantPage;
