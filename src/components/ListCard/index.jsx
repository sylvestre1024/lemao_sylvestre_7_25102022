import React from 'react'
import ProductList from '../../api/logements.json'
import Card from '../../components/Card'
import '../../components/Card/styles.css'

function ListCard() {
    return (
        <div className='container_card'>
            <ul className='box_card'>
                {ProductList
                    .map((product, index) => (
                        <Card key={index} product={product} />
                    ))}
            </ul>
        </div>
    )
}

export default ListCard