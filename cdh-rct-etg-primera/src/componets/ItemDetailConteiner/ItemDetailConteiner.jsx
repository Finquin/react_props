import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { filterDateById, getDate } from "../../helpers/getDate"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailConteiner = () => {

    const [item, setItem] = useState(null)
    const [err, setErr] = useState(null)

    const { itemId } = useParams()

    console.log(itemId)


    // const [item, setltem] =
    //     ({
    //         item: {},
    //         error: null,
    //         loading: false
    //     })


    useEffect(() => {
        setErr(null)
        filterDateById(Number(itemId))
            .then((data) => {
                setItem(data)
            })
            .catch((err) => {
                setErr(err.err)

            })

    }, [itemId]
    )
    return (
        <div className="itemDetailConteiner">
            <h1 className="title">Detalles Plantas</h1>
            {
                err
                    ? err
                    : item && <ItemDetail item={item} />
            }


        </div>
    )

}