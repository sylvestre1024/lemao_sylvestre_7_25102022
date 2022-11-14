import React from 'react'
import Header from '../../components/Header'
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