import React from 'react'
import Card from '../../components/Card'
import './styles.css'
import useFetch from "../../utils/hooks/useFetch";

function ListCard({ data }) {
    const loadedData = data
    //console.log(data)
    return (
        <div className='container_card'>

            <ul className='box_card'>
                {loadedData
                    .map((product, index) => (
                        <Card key={index} product={product} />
                    ))}
                </ul>

        </div>
    )
}

export default ListCard