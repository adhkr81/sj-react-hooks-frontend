import "./footer.css"

export function Footer ({handleClick, footerRefArray, list}) {


    return (
        <footer className="footerContainer">
            <div className="footer">
                {list.map((item) => {
                    return (
                        <button className="boldButton" style={{"color": "black" , "backgroundColor" : "white"}} 
                        ref={(element) => footerRefArray.current.push(element)}
                        id={item.number -1} onClick={handleClick} key={item.number + 10}>

                            <span className="B">B</span> 
                            <span className="hide">Bold Card</span> <span className="btnNumber">{item.number}</span>
                        </button>
                    )
                })}
            </div>
        </footer>
    )
}