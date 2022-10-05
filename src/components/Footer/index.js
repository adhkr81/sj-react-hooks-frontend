import "./footer.css"

export function Footer ({handleClick}) {


    return (
        <footer className="footerContainer">
            <div className="footer">
                <button id="0" onClick={handleClick}>Bold Card 1</button>
                <button id="1" onClick={handleClick}>Bold Card 2</button>
                <button id="2" onClick={handleClick}>Bold Card 3</button>
            </div>
        </footer>
    )
}