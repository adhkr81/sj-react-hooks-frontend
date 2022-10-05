import "./navbar.css"

export function Navbar () {

    return (
        <nav className="container">
            <div className="font">HAPPY FACE</div>
                <div className="buttonDiv">
                    <button>useRef Demo</button>
                    <button>useMemo Demo</button>
                    <button>useEffect Demo</button>
                </div>
            <div className="font">SEARCH</div>
        </nav>
    )

}