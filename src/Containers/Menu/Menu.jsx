import React, { useState, useEffect } from "react";
import { food } from "../../constants";
// import Layout from "../../Components/indext";

const Menu = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedMealType, setSelectedMealType] = useState(null);

  useEffect(() => {
    const items = food[selectedMealType]?.map((item, index) => (
      <div key={index}>
        <h3>{item.name}</h3>
        <p>Price: {item.price}</p>
        <img src={item.image} alt={item.name} />
      </div>
    ));
    setFoodItems(items);
  }, [selectedMealType]);
    


  const mealTypes = Object.keys(food).map((mealType, index) => (
    <div key={index} onClick={() => setSelectedMealType(mealType)}>
      {mealType}
    </div>
  ));

  return (
      <>
      </>
  );
};

export default Menu;
