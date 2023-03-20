import React, { useState, useEffect } from 'react';
import { bar } from '../../constants';

const Shisha = () => {
  const [Items, setItems] = useState([]);
  const [selectedMealType, setSelectedMealType] = useState(null);
  const [mealTypes, setMealTypes] = useState([]);

  useEffect(() => {
    const allItems = Object.values(bar).reduce((acc, curr) => [...acc, ...curr], []);
    const items = allItems.map((item, index) => (
      <div className='section__page-container_itemscontainer-item' key={index}>
        <h3 className='section__page-container_itemscontainer-item_name'>{item.name}</h3>
        <p className='section__page-container_itemscontainer-item_price'>Price: {item.price}</p>
        <img className='section__page-container_itemscontainer-item_image' src={item.image} alt={item.name} />
      </div>
    ));
    setItems(items);
  }, []);

  useEffect(() => {
    const types = Object.keys(bar).map((mealType, index) => {
     
      return (
        <div key={index} onClick={() => setSelectedMealType(mealType)}>
          {mealType}
        </div>
      );
    });
    setMealTypes(types);
  }, []);

  return (
    <div className="section__page">
        <div className="section__page-sidebar_category">
          {mealTypes}
      </div>
      <div className="section__page-container">
        {selectedMealType ? (
          <div className="section__page-container_items">
            <h1 className='section__page-container_category'>{selectedMealType}</h1>
            <div className='section__page-container_itemscontainer'>
              {bar[selectedMealType]?.map((item, index) => (
                <div className='section__page-container_itemscontainer-item' key={index}>
                  <h3 className='section__page-container_itemscontainer-item_name'>{item.name}</h3>
                  <p className='section__page-container_itemscontainer-item_price'>Price: {item.price}</p>
                  <img className='section__page-container_itemscontainer-item_image' src={item.image} alt={item.name} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="section__page-container_items">
            <h1 className='section__page-container_category'>All items</h1>
            <div className='section__page-container_itemscontainer'>
              {Items}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shisha;
