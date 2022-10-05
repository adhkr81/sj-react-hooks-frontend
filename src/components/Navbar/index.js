import "./navbar.css"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export function Navbar () {

    return (
        <nav className="container">
            <div className="font"><EmojiEmotionsIcon sx={{"color" : "red"}}/></div>
                <div className="buttonDiv">
                    <button>useRef Demo</button>
                    <button>useMemo Demo</button>
                    <button>useEffect Demo</button>
                </div>
            <div className="font">SEARCH</div>
        </nav>
    )

}