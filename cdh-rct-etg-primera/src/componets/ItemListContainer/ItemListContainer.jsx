
import { useState, useEffect } from "react"
import { getDate } from "../../helpers/getDate"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import "./itemListContainer.css"



export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    getDate()
    useEffect(() => {
        getDate()
            .then((res) => {
                if (categoryId) {

                    setProductos(res.filter(prod => prod.category === categoryId))

                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryId])


    return (
        <section className="ItemListContainer">
            <ItemList productos={productos}></ItemList>
        </section >
    )
}
