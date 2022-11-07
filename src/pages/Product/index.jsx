import { useParams } from "react-router-dom"
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import Collapse from '../../components/Layout/Collapse'
const productData = require("./logements.json")

/*
function Product() {
  return (
    <div>Page Product</div>
  )
}
*/

// localStorage pour charger dans la Home et récupérer dans la page Product

function getProductWithId (productData, productId) {
    for (let product of productData) {
        if (product.id===productId) { 
            console.log(product.id, productId, product)
            return product
        }
    }
}

function Product() { 
    const {productId} = useParams()
    const product = getProductWithId(productData, productId)

    return (
      <div>test 
        <div>id : {productId}</div>
        <div>{product.title}</div>
        <div>{product.location}</div>
        </div>
    )
}

export default Product