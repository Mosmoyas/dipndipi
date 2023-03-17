import React, { useState, useEffect } from 'react';
import { food } from '../../constants';

const Food = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [selectedMealType, setSelectedMealType] = useState(null);
    const [mealTypes, setMealTypes] = useState([]);

    useEffect(() => {
        const allItems = Object.values(food).reduce((acc, curr) => [...acc, ...curr], []);
        const items = allItems.map((item, index) => (
            <div className='section__page-container_items-info_item' key={index}>
                <h3 className='section__page-container_name'>{item.name}</h3>
                <p className='section__page-container_price'>Price: {item.price}</p>
                <img className='section__page-container_image' src={item.image} alt={item.name} />
            </div>
        ));
        setFoodItems(items);
    }, []);

    useEffect(() => {
        const types = Object.keys(food).map((mealType, index) => {
            const formattedMealType = mealType.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            return (
                <div key={index} onClick={() => setSelectedMealType(mealType)}>
                    {formattedMealType}
                </div>
            );
        });
        setMealTypes(types);
    }, []);

    return (
        <div className="section__page">
            <div className="section__page-sidebar">
                <div className="section__page-sidebar_category">
                    {mealTypes}
                </div>
            </div>
            <div className="section__page-container">
                {selectedMealType ? (
                    <div className="section__page-container_items">
                        <h1 className='section__page-container_category'>{selectedMealType.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</h1>
                        <div className='section__page-container_items-info'>
                            {food[selectedMealType]?.map((item, index) => (
                                <div className='section__page-container_items-info_item' key={index}>
                                    <h3 className='section__page-container_name'>{item.name}</h3>
                                    <p className='section__page-container_price'>Price: {item.price}</p>
                                    <img className='section__page-container_image' src={item.image} alt={item.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="section__page-container_items">
                        <h1 className='section__page-container_category'>All items</h1>
                        <div className='section__page-container_items-info'>
                            {foodItems}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Food;
