import "./itemList.css"
import { Item } from "../Item/Item"

export const ItemList = ({ productos }) => {
    return (

        <>
            <h1 className="title">Plantas</h1>
            <article className="itemList">
                {
                    productos.map((el) => (

                        < div className="card" key={el.id} >
                            {<Item plantItem={el} />}
                        </div>

                    )
                    )
                }
            </article>
        </>
    )
}