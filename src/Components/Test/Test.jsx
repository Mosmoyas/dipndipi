import React from "react";
import { foodold, images } from "../../constants/index";
import "./Test.css";

function MyComponent() {
  const fooddata = foodold.map((item, index) => {
    return (
      <>
        <div className="food-item">
          <img src={item.image} alt="Breakfast for 3 person" />
          <p>{item.name}</p>
          <span>Price: {item.price} IQD</span>
        </div>
      </>
    );
  });

  const filteredData = foodold
    .filter((item) => item.category === "breakfast")
    .map((item) => {
      return (
        <>
          {item.category ?
            <div className="food-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <span>Price: {item.price} IQD</span>

            </div> : ""}
        </>
      );
    });

  console.log(filteredData);

  return (
    <>
      <main>

        <div className="manu">
          <div>Breakfast</div>
          <div>Chocolate</div>
          <div>Drinks</div>
          <div>Shisha</div>
        </div>
        <div className="food">

          {/* {filteredData} */}
          {fooddata}

        </div>
      </main>

    </>
  );
}

export default MyComponent;
