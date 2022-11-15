import React, { useState } from 'react'
import ChevronLeft from '../../images/chevron_left.svg'
import ChevronRight from '../../images/chevron_right.svg'
import './styles.css'
/*
'props' correspond aux images liées au logement demandé par l'utilisateur
on utilise 'slideIdx' pour définir quelle nombre d'image à transposer vers le positionnement, 
on passe par la propriété du composant 'style' en css (n image x longueurImage) (1), 
on va chercher l'information 'longueurImage' via une requête de selecteur 'document.querySelector'
On gère de façon à savoir si l'image à venir est après ou avant, 
ça permet de gérer l'effet de balayage/passage d'image à une autre du composant 'Carousel'

(1) : on utilise la fonction 'imgSize' pour connaître la longueur de l'image liée 
à son calcul par le navigateur en lien avec la définition css
on pourra alors transposer le positionnement css finement
puisque les images sont à la suite des autres dans un bandeau (une div)
*/

function Carousel(props) {
    //console.log(props)
    /*img:Array(5)
    0: "https://...accommodation-20-1.jpg"
    1: "https://...accommodation-20-2.jpg"
    2: "https://...accommodation-20-3.jpg"
    3: "https://...accommodation-20-4.jpg"
    4: "https://...accommodation-20-5.jpg"
    length: 5
    */
    // identification du numéro d'image en cours
    const [slideIdx, setSlideIdx] = useState(0);

    /* fonction qui retourne la taille moyenne d'image calculée par la css */
    const imgSize = () => { // notation ancienne : const imgSize = function imgSize() {
        const carouselImg = document.querySelector('.carousel-container img')
        //par ex : <img class="carousel-container-img" src="https://ex.jpg" alt="photos-logement">
        // si pas de composant img, retourne une valeur à 0
        if (!carouselImg) {
            return 0;
        }
        console.log('Taille de l\'image via carouselImg.width : ' + carouselImg.width)
        // on retourne la taille du carousel, qui peut changer par redimensionnement de fenêtrage, orientation de visualisation
        return carouselImg.width;
    }

    /* fonction de gestion de commande qui avance le carousel */
    const onNext = () => {
        if (slideIdx === props.img.length - 1) {
            setSlideIdx(0) // nous fait repartir au début à la 1re image
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }

    /* fonction de gestion de commande qui recule le carousel */
    const onPrev = () => {
        if (slideIdx === 0) {
            setSlideIdx(props.img.length - 1)
        } else {
            setSlideIdx(slideIdx - 1)
        }
    }

    //console.log('Numero d\'image via la variable slideIdx : ' + slideIdx)
    //console.log(props.img.length)
    // {({ isActive }) => ({ textDecorationLine: isActive ? 'underline' : 'none' })}> onClick={onNext} />

    return (
        <div className="carousel">
            <div className="carousel-container"
                style={{ transform: `translateX(-${slideIdx * imgSize()}px)` }}>
                {props.img.map((picture) =>
                    < img className='carousel-container-img'
                        src={picture}
                        key={picture}
                        alt='photos-logement' />
                )}
            </div>
            <div className={'carousel-controls'}>
                <img src={ChevronLeft} alt="chevron-left" className={props.img.length === 1 ? 'chevron-hidden' : 'chevron'} onClick={onPrev} /> 
                {/*notation ancienne / nouvelle :                         onClick={()=>onPrev(<parametresOptionnels)}  vs   onClick={onPrev} */} 
                <img src={ChevronRight} alt='chevron-right' className={props.img.length === 1 ? 'chevron-hidden' : 'chevron'} onClick={onNext} />
            </div>
            <div className='carousel-idx'>{slideIdx + 1} / {props.img.length}</div>
        </div>
    )
}

export default Carousel