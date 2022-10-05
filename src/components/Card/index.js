import "./card.css"

export function Card ({list}) {

    console.log(list)

    return (
        
    <div className="screen">
        {list.map((item) => {
            return (
                <div className="cards">
                    <div className="numberStyle">{item}</div>
                    <div className="textContainer">Lorem ipsum dolor sit amet. Ut aperiam voluptas qui deserunt sapiente 
                        non impedit recusandae qui maxime fugiat? Ut rerum cumque sed perspiciatis 
                        quia vel adipisci quidem aut veritatis veritatis At quos tempora qui sequi 
                        dolor in galisum voluptas! </div>            
                </div>
            )
        })}
    </div>
    )
}

