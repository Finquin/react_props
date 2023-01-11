import "./itemDetail.css"
export const ItemDetail = ({ item }) => {

    const {
        id,
        plant_name,
        description,
        stock,
        price,
        category,
        image,
    } = item

    return (


        <div className="itemDetail">
            <div className="card__header">
                <div className="card__figure">
                    {<img className="card__img" src={image} alt="" />}

                </div>
            </div>
            <div className="card__body ">
                <h2 className="card__title">{plant_name}</h2>
                <h4 className="card__category">{category}</h4>
                <p className="card__price">${price}</p>
                <p className="card__desc">{description}</p>

            </div>
            <div className="card__footer">

                <div className="card__actions">
                    <a className="btn btn--action" href="#">Comprar Ahora</a>
                    <a className="btn btn--info" href="#">Agregar al Carrito</a></div>

            </div>

        </div >

    )
}