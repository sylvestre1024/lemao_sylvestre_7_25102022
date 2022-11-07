import { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeadBand from '../../components/Layout/HeadBand'
import Card from '../../components/Layout/Card'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import { Link } from "react-router-dom";

/*
//FONCTIONNE AVEC UN HOOK
import useFetch from "../../utils/hooks/useFetch";
function Home () {
  const {datas, isLoading} = useFetch("http://localhost:3000/logements.json")
  const loadedData = datas
  console.log(datas)
  return (
      <div>
        test
      </div>
  )
}
*/
/*
// UTILISATION DE TECHNIQUE EXTERNE SUR LE WEB
const useAnswer = () => {
  const [answer, setAnwser] = useState();

  const getAnswer = async () => {
    const res = await fetch("http://localhost:3000/logements.json");
    const answer = await res.json();
    setAnwser(answer);
  };

  useEffect(() => {
    getAnswer();
  }, []);
  return answer;
};

function Home() {
  const answer = useAnswer();
  return <div>{JSON.stringify(answer)}</div>;
}
*/

// UTILISATION DES COURS OPENCLASSROOMS
/*
function Home() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [productsList, setProductsList] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      setDataLoading(true)
      try {
        const response = await fetch("http://localhost:3000/logements.json")
        const { productsList } = await response.json()
        setProductsList(productsList)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
    <div>&#10097;Page Home</div>
    <hr/>
  </div>
  )
}
*/

//FONCTIONNE AVEC UN HOOK

import useFetch from "../../utils/hooks/useFetch";

function Home() {
  // valeur null pour se passer d'un paramètre
  const {datas, isLoading} = useFetch("http://localhost:3000/logements.json")
  const loadedData = datas
  console.log(datas)
  return (
          <div>
            {isLoading ? (
                <div></div>
            ) : (
                <div>
                    {loadedData.map((myData) => (
                        <Link to={`/Product/${myData.id}`} key={myData.id}>
                            <Card 
                            title={myData.title} 
                            picture={myData.pictures[0]} 
                            />
                        </Link>
                    ))}
                </div>
            )}
        </div>
  )
}


export default Home