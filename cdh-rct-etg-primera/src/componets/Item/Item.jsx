
import { Link } from "react-router-dom";

import "./item.css"

export const Item = ({ plantItem }) => {
    const {
        id,
        plant_name,
        description,
        stock,
        price,
        category,
        image
    } = plantItem

    return (


        <>
            <div className="card__header">
                <div className="card__figure">
                    {<img className="card__img" src={image} alt="" />}

                </div>
            </div>
            <div className="card__body">
                <h2 className="card__title">{plant_name}</h2>
                <h4 className="card__category">{category}</h4>
                <p className="card__desc">{description}</p>
                <p className="card__price">${price}</p>
            </div>
            <div className="card__footer">

                <div className="card__actions">
                    <Link className="btn btn--action" to={`/itemDetail/${id}`}>ver mas</Link>
                </div>

            </div>
        </>

    )
}