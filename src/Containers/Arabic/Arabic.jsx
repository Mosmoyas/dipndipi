import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './arabic.css'

function Arabic(props) {
    const { products } = props;

    const [items, setItems] = useState({});

    useEffect(() => {
        const gitems = {};
        products.forEach((item) => {

            if (!gitems[item.ar_category]) {
                gitems[item.ar_category] = [item];
            } else {
                gitems[item.ar_category].push(item);
            }
        });
        setItems(gitems);
    }, [products]);

    const [mealTypes, setCategoryTypes] = useState([]);
    const [selectedCategoryType, setSelectedCategoryType] = useState(null);
    useEffect(() => {
        let types = [...new Set(products.map(item => item.ar_category))].map((categoryType) => {
            return (
                <div
                    key={categoryType}
                    onClick={() => setSelectedCategoryType(categoryType)}
                    className="dipndip__category_btn-category"
                >
                    <Link className="categoryLink">                    {categoryType}
                    </Link>                    </div>
            );
        });
        setCategoryTypes(types);
    }, [products]);


    return (
        <><div className="dipndip__page ar">
            <div className="dipndip__category ar">{mealTypes}</div>
            {selectedCategoryType ? (
                <div className="dipndip__container ar">
                    {items[selectedCategoryType]?.map((item) => (
                        <div className="dipndip__container_item" key={item.id}>
                            <div className="dipndip__container_item-details">
                                <div className="dipndip__container_item-details_info">
                                    <h5 className="dipndip__container_item-details_info-name">{item.arabic_name}</h5>
                                    <img src={item.image} alt={item.arabic_name} className="dipndip__container_item-details_info-img" />
                                    <p className="dipndip__container_item-details_info-price">{item.price} IQD</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="dipndip__container ar">
                    {Object.entries(items).map(([category, itemList]) => (
                        <div className="dipndip__container_item" key={category}>
                            <div className="dipndip__container_item-details" >
                                {itemList.map((item) => (
                                    <div className="dipndip__container_item-details_info" key={item.id}>
                                        <h4 className="dipndip__container_item-details_info-name">{item.arabic_name}</h4>
                                        <img src={item.image} alt={item.name} className="dipndip__container_item-details_info-img" />
                                        <p className="dipndip__container_item-details_info-price">{item.price} IQD</p>
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

export default Arabic;
