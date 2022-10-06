import { useRef } from "react"

import "./card.css"

export function Card ({list , cardsRefArray}) {


    return (
        
    <div className="screen">
        {list.map((item) => {
            return (
                <div style={{"fontWeight" : "200", "borderColor" : "rgb(118, 118, 118)", "borderWidth" : "1px"}} key={item} ref={(element) => cardsRefArray.current.push(element)} className="cards">
                    <div className="numberStyle">{item}</div>
                    <div className="textContainer">Lorem ipsum dolor sit amet. Ut aperiam voluptas qui deserunt sapiente 
                        non impedit recusandae qui maxime fugiat? Ut rerum cumque sed perspiciatis 
                        quia vel adipisci quidem aut veritatis veritatis aoant sea aux denovo no sea</div>            
                </div>
            )
        })}
    </div>
    )
}

