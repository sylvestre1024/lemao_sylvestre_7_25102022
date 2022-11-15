import React from 'react'
import { NavLink } from "react-router-dom";
import './styles.css'
/*
Le <Link> et le <NavLink> sont les composants fournis par react-router-dom pour naviguer dans l'application de réaction. 
Généralement, nous utilisons des balises d'ancrage à cette fin lors de la navigation. Alors quelle est la différence ? 
Découvrons-le.

Les balises d'ancrage rechargeront la page et restitueront tous les composants. Tandis que <Link> et <NavLink> 
ne restitueront que les composants mis à jour correspondant au chemin URL de la Route sans rechargement. 
Cela aide les applications à page unique à fonctionner plus rapidement lors du routage.

<Lien> Accessoires de composant :

to : chaîne ou objet qui spécifie le chemin d'accès.
replace : Remplace le chemin d'accès dans la pile d'historique par new.
innerRef : passe la référence à l'élément rendu par le composant.

<NavLink> Accessoires de composant :

to, remplacer, innerRef identique au composant de lien.
className : spécifie le nom de la classe CSS que vous souhaitez appliquer à l'élément lorsqu'il est actif.
isActive : renvoie une valeur booléenne, que le lien soit actif ou non.
style : pour appliquer le CSS en ligne.
end : faites correspondre précisément le chemin d'accès à l'URL.

Un <NavLink> est un type spécial de <Link> qui sait s'il est "actif" ou non.

Source : https://www.geeksforgeeks.org/link-and-navlink-components-in-react-router-dom/
*/

function Navigate() {
  return (
            <nav>
                <ul className='menu'>
                    <NavLink to="/" style={({ isActive }) => ({ 
                            textDecorationLine: isActive ? 'underline' : 'none' })}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="About" style={({ isActive }) => ({ 
                            textDecorationLine: isActive ? 'underline' : 'none' })}>
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
  )
}

export default Navigate