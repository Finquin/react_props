import MOCK_DATA from "../data/MOCK_DATA.json"

export const getDate = () => {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 2000);
    })
}
export const filterDateById = (id) => {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = MOCK_DATA.find((el) => el.id === id)
            if (item) {

                resolve(item)
            } else {
                reject({
                    err: "No se encontro el producto"
                })
            }
        }, 2000);
    })
}