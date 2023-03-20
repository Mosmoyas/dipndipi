import { useState, useEffect } from "react";
import './c.css'

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
                    className="btn btn-primary m-1"
                >
                    {categoryType}
                </button>
            );
        });
        setCategoryTypes(types);
    }, [products]);


    return (
        <>
            <div className="main d-flex flex-wrap justify-content-center">{mealTypes}</div>
            {selectedCategoryType ? (
                <div className="row">
                    {items[selectedCategoryType]?.map((item) => (
                        <div className="col-md-3 mb-3" key={item.id}>
                            <div className=" cardedit card">
                                <img src={item.image} alt={item.arabic_name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.arabic_name}</h5>
                                    <p className="card-text">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    {Object.entries(items).map(([category, itemList]) => (
                        <div key={category}>
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
