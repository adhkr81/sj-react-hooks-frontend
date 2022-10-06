import "./navbar.css"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export function Navbar () {

    return (
        <nav className="container">
            <div className="smile"><EmojiEmotionsIcon sx={{"color" : "red"}}/></div>
                <div className="buttonDiv">
                    <button className="useButton">useRef Demo</button>
                    <button className="useButton">useMemo Demo</button>
                    <button className="useButton">useEffect Demo</button>
                </div>
            <div className="search">SEARCH</div>
        </nav>
    )

}