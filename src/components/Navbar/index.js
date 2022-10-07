import "./navbar.css"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"


export function Navbar ({list, navbarRefArray, setActiveBtns, activeBtns}) {

    const handleBtnClick = () => { setActiveBtns(!activeBtns) }


    return (
        <nav className="container">
            <div className="hamburger"><MenuIcon sx={{"color" : "white"}}/></div>
            <div className="smile"><EmojiEmotionsIcon sx={{"color" : "black"}}/></div>
                <div className="buttonDiv">
                    {list.map((item) => {
                    return (
                            <Link to={`${item.name}`}>
                                <button style={{"color": "grey"}} className="useButton" id={item.number}
                                        onClick={handleBtnClick}
                                        ref={(element) => navbarRefArray.current.push(element)}>
                                            {item.name} Demo
                                </button>
                            </Link>
                        )})}
                </div>
            <div className="search"><SearchIcon /></div>
        </nav>
    )

}

