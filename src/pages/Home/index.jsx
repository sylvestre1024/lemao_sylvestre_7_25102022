import React from 'react'
import Banner from '../../components/Banner'
import ListCard from '../../components/ListCard'

function Home({ data }) {
    return (
        <div> 
            <Banner />
            <ListCard data={data}/>
        </div>
    )
}

export default Home