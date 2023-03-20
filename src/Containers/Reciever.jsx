import { useState, useEffect } from "react";

function Reciever(props) {
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
                <button
                    key={categoryType}
                    onClick={() => setSelectedCategoryType(categoryType)}
                >
                    {categoryType}
                </button>
            );
        });
        setCategoryTypes(types);
    }, [products]);


    return (
        <>
            <div className="categories">{mealTypes}</div>
            {selectedCategoryType ? (
                <div className="items">
                    {items[selectedCategoryType]?.map((item) => (
                        <div key={item.id}>
                            <h3>{item.arabic_name}</h3>
                            <img src={item.image} alt={item.arabic_name} />
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="items">
                    {Object.entries(items).map(([category, itemList]) => (
                        <div key={category}>
                            <h3>{category}</h3>
                            <ul>
                                {itemList.map((item) => (
                                    <li key={item.id}>
                                        <h4>{item.arabic_name}</h4>
                                        <img src={item.image} alt={item.arabic_name} />
                                        <p>{item.price}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Reciever;
