import axios from "axios"

export const getAllProducts = async() => {
    const {data} = await axios.get('https://dummyjson.com/products')
    return data
} 

export const getSingleProductInfo = async(id) => {
    const {data} = await axios.get(`https://dummyjson.com/products/${id}`)
    return data
}