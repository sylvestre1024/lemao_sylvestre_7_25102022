import React, { useState, useRef } from "react"
import Chevron from '../../images/small_chevron.svg'
import './styles.css'
/*
Le collapse est fonctionnel grâce au 'button' qui déclenche lors de l'action de l'utilisateur
un évenement 'OnClick' qui appelle la fonction 'togglecollapse'
cette fonction agit comme un interrupteur, 
on agit sur des proprités css qui visuellement ouvre une boite, c'est un 'collapse'
on agit aussi sur la rotation de l'icone de l'icône du chevron pour indiquer 
dans quel sens l'action visuelle se produira lors de la prochaine fois

Dès qu'il y a une gestion d'état dans React, on utilise 'useState
on a une définition de notre état, un 'setter' modificateur, 
puis une valeur éventuelle par défaut
*/

function Collapse(props) {
    // Pour notre composant : état actif/inactif
    const [setActive, setActiveState] = useState("")
    // Pour la hauteur de la div
    const [setHeight, setHeightState] = useState("0px") 
    // Pour la rotation du chevron
    const [setRotate, setRotateState] = useState("collapse-icon")

    /* #useRef 
    Renvoie un objet ref mutable dont la propriété est initialisée à l’argument passé (initialValue). 
    L’objet renvoyé persistera pendant toute la durée de vie du composant.*/
    const content = useRef(null)

    // utilisation paramètrée du composant pour des tailles css differentes (page About)
    const { size } = props
    const className = size === 'large' ? 'about__page' : 'product__page'


    // #scrollHeight propriété 
    // renvoie la hauteur d'un élément, y compris le remplissage,
    // mais à l'exclusion des bordures, des barres de défilement ou des marges.
    
    /* on change à l'action 'togglecollapse', 3 élements, 
    avec une fonction ternaire (condition, valeur si oui, valeur si non */
    const togglecollapse = () => {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        )
        setRotateState(
            setActive === "active" ? "collapse-icon" : "collapse-icon rotate"
        )
    }
    //console.log(setActive+'-'+setHeight+'-'+setRotate)

    /*
    FERMER
    <button class="collapse ">                                --> ICI on enleve notre fausse classe css
    <div class="collapse-content" style="max-height: 0px;">   --> ICI on réinitialise dans le style css une valeur de hauteur
    quand je clique pour fermer le collapse
    la propriété setActive est  'null', il y a une 0 hauteur, le chevron pointe vers le bas

    OUVERT :
    <button class="collapse active">                          --> ICI on ajoute notre fausse classe css
    <div class="collapse-content" style="max-height: 155px;"> --> ICI on change dans le style css une valeur de hauteur
    quand je clique pour ouvrir le collapse
    la propriété setActive est 'active', il y a une hauteur,  le chevron pointe vers le haut
    */
    return (
        <div className={className}>
            <button className={`collapse ${setActive}`} onClick={togglecollapse}>
                <p className="collapse-title">{props.title}</p>
                <img src={Chevron} alt="chevron" className={`${setRotate}`} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="collapse-content"
            >
                <div><div className="collapse-text">{props.content}</div></div>
            </div>
        </div>
    )
}

export default Collapse