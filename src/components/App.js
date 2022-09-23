import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants]= useState([])
  const [filteredPlants, setFilteredPlants] = useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/plants').then(resp=>resp.json()).then(result=>{
      setPlants(result);
      setFilteredPlants(result);})
  },[])

  console.log(plants)

  function handleFilterPlants(searchText){
    if (searchText === '') {
      setFilteredPlants(plants);
    } else {
      setFilteredPlants(plants.filter((plant)=> plant.name.toLowerCase().includes(searchText.toLowerCase())))
    }
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plantList={filteredPlants} onFilter={handleFilterPlants}/>
    </div>
  );
}

export default App;
