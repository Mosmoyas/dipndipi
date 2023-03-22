import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './english.css'

function English(props) {
    const { products } = props;

    const [items, setItems] = useState({});

    useEffect(() => {
        const gitems = {};
        products.forEach((item) => {

            if (!gitems[item.category]) {
                gitems[item.category] = [item];
            } else {
                gitems[item.category].push(item);
            }
        });
        setItems(gitems);
    }, [products]);

    const [mealTypes, setCategoryTypes] = useState([]);
    const [selectedCategoryType, setSelectedCategoryType] = useState(null);
    useEffect(() => {
        let types = [...new Set(products.map(item => item.category))].map((categoryType) => {
            return (
                <div
                    key={categoryType}
                    onClick={() => setSelectedCategoryType(categoryType)}
                    className="dipndip__category_btn-category"
                >
                    <Link className="categoryLink">                    {categoryType}
                    </Link>                </div>
            );
        });
        setCategoryTypes(types);
    }, [products]);


    return (
        <><div className="dipndip__page en">
            <div className="dipndip__category">{mealTypes}</div>
            {selectedCategoryType ? (
                <div className="dipndip__container en">
                    {items[selectedCategoryType]?.map((item) => (
                        <div className="dipndip__container_item" key={item.id}>
                            <div className="dipndip__container_item-details">
                                <div className="dipndip__container_item-details_info">
                                    <h5 className="dipndip__container_item-details_info-name">{item.name}</h5>
                                    <img src={item.image} alt={item.name} className="dipndip__container_item-details_info-img" />
                                    <p className="dipndip__container_item-details_info-price">Price : {item.price} IQD</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="dipndip__container en">
                    {Object.entries(items).map(([category, itemList]) => (
                        <div className="dipndip__container_item" key={category}>
                            <div className="dipndip__container_item-details" >
                                {itemList.map((item) => (
                                    <div className="dipndip__container_item-details_info" key={item.id}>
                                        <h4 className="dipndip__container_item-details_info-name">{item.name}</h4>
                                        <img src={item.image} alt={item.name} className="dipndip__container_item-details_info-img" />
                                        <p className="dipndip__container_item-details_info-price">Price : {item.price} IQD</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
}


export default English;
