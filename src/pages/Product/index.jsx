import { useParams } from "react-router-dom"
import Header from '../../components/Header'
import Slideshow from "../../components/Slideshow"
import Collapse from '../../components/Collapse'
const productData = require("./logements.json")

// localStorage pour charger dans la Home et récupérer dans la page Product

function getProductWithId (productData, productId) {
    for (let product of productData) {
        if (product.id===productId) { 
            //console.log(product.id, productId, product)
            return product
        }
    }
}

function Product() {
  const { productId } = useParams()
  const product = getProductWithId(productData, productId)
  console.log(product)
  return (   
    <div>
      <Header />
      {/*
            <Slideshow photosArray={product.pictures} />
            <div>
              <div>
                <div>Titre : {product.title}</div>
                <div>Localisation : {product.location}</div>
                <ul>
                  {product.tags.map((tag)=>(
                      <li key={tag.index}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div>
                  <div>Qui : {product.host.name}</div>
                  <div><img src={product.host.picture} alt={product.host.name} /></div>
                </div>
              </div>
            </div>
            <div>Note : {parseInt(product.rating)}</div>
            <ul>Equipments :
              {product.equipments.map((tag)=>(
                <li key={tag.index}>{tag}</li>
                    ))}
            </ul>
            <ul>
              {product.pictures.map((tag)=>(
                <li key={tag.index}>{tag}</li>
                    ))}
            </ul>
      */}

                  <div className='collapse-container'>
                    <Collapse
                        title="Description"
                        content={product.description}
                    />
                    <Collapse
                        title="Equipements"
                        content={
                            <ul>
                                {product.equipments.map((equipment) =>
                                    <li key={equipment}>{equipment}</li>)}
                            </ul>
                        }
                    />
                  </div>
      
    </div>
    )
}

export default Product