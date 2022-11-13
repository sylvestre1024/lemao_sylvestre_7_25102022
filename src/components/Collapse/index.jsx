import { useState } from "react";


function Collapse ({label, description}) {
    const [isHidden, setIsHidden] = useState(true)
//TODO isHidden => isCollapsed
//TODO variables possibilités
    return (
        <div className="collapse">
            <div className="collapse__header">
                <div className="collapse__header__label"><b>{label}</b></div>
                {isHidden ? 
                    (<div onClick={()=>setIsHidden(false)}>Ouvrir le collapse</div>)
                    : 
                    (<div onClick={()=>setIsHidden(true)}>Ferme le collapse</div>)}
            </div>
            {!isHidden && 
            <div className="collapse__description">{description}</div>}
        </div>
    )
}
export default Collapse