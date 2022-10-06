import "./footer.css"

export function Footer ({handleClick, buttonsRefArray, list}) {


    return (
        <footer className="footerContainer">
            <div className="footer">
                {list.map((item) => {
                    return (
                        <button className="boldButton" style={{"color": "black" , "backgroundColor" : "white"}} 
                        ref={(element) => buttonsRefArray.current.push(element)}
                        id={item -1} onClick={handleClick} key={item + 10}>
                            
                            <span className="B">B</span> 
                            <span className="hide">Bold Card</span> <span className="btnNumber">{item}</span>
                        </button>
                    )
                })}
            </div>
        </footer>
    )
}