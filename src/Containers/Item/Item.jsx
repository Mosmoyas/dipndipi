import React from 'react';

import './Item.css'
import hotschock from '../../assets/images/drinks-hotchocolate-6000.jpg'
const Item = () => {
    return (
        <>
            <div className="card mb-1">
                <div className="row g-0">
                    <div className="col-7">
                        <img src={hotschock} data-id="69" className="img-fluid rounded-start item-image" alt="Hot Chocolate"/>
                    </div>
                    <div className="col-5 item-text-aria">
                        <div className="card-body p-0">
                            <h5 className="card-title" >الشوكولاتة الساخنة</h5>
                            <p className="card-text">6.000 IQD</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Item
