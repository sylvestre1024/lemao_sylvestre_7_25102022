import React, { useState, useRef } from "react"
import Chevron from '../../images/small_chevron.svg'
import './styles.css'

function Collapse(props) {
    const [setActive, setActiveState] = useState("")
    const [setHeight, setHeightState] = useState("0px")
    const [setRotate, setRotateState] = useState("collapse-icon")

    const content = useRef(null)


    // utilisation paramètrée du composant pour des tailles css differentes
    const { size } = props
    const className = size === 'large' ? 'about__page' : 'logement-page'


    const togglecollapse = () => {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        )
        setRotateState(
            setActive === "active" ? "collapse-icon" : "collapse-icon rotate"
        )
    }

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