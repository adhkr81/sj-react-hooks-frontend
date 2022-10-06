import "./footer.css"

export function Footer ({handleClick, buttonsRefArray, list}) {


    return (
        <footer className="footerContainer">
            <div className="footer">
                {list.map((item) => {
                    return (
                        <button className="boldButton" style={{"color": "black" , "backgroundColor" : "white"}} ref={(element) => buttonsRefArray.current.push(element)}
                        id={item -1} onClick={handleClick}>
                            <span className="B">B</span> Bold Card {item}
                        </button>
                    )
                })}
            </div>
        </footer>
    )
}