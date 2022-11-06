import { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeadBand from '../../components/Layout/HeadBand'
import Card from '../../components/Layout/Card'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'

/*
//FONCTIONNE AVEC UN HOOK EN CHEMIN ABSOLU
import useFetch from "../../utils/hooks/useFetch";
function Home () {
  const {datas, isLoading} = useFetch("./test.json")
  const lodgingDatas = datas
  console.log(datas)
  return (
      <div>
        test
      </div>
  )
}
*/

// UTILISATION DE TECHNIQUE EXTERNE SUR LE WEB
//FONCTIONNE PAS EN CHEMIN RELATIF
// avec "./test.json"
// mais FONCTIONNE
// avec "https://yesno.wtf/api"
/*
const useAnswer = () => {
  const [answer, setAnwser] = useState();

  const getAnswer = async () => {
    const res = await fetch("https://yesno.wtf/api");
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
//FONCTIONNE PAS EN CHEMIN RELATIF
// avec "./test.json"
// mais FONCTIONNE
// avec "https://yesno.wtf/api"
/*
function Home() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [productsList, setProductsList] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      setDataLoading(true)
      try {
        const response = await fetch("./test.json")
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

//FONCTIONNE AVEC UN HOOK EN CHEMIN ABSOLUE
import useFetch from "../../utils/hooks/useFetch";

function Home () {
  const {datas, isLoading} = useFetch("https://yesno.wtf/api")
  const lodgingDatas = datas
  console.log(datas)
  return (
      <div>
        test
      </div>
  )
}

export default Home