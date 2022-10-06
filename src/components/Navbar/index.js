import "./navbar.css"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

export function Navbar ({list, navbarRefArray}) {

    return (
        <nav className="container">
            <div className="hamburger"><MenuIcon sx={{"color" : "white"}}/></div>
            <div className="smile"><EmojiEmotionsIcon sx={{"color" : "white"}}/></div>
                <div className="buttonDiv">
                    {list.map((item) => {
                    return (
                            <button style={{"color": "grey"}} className="useButton" id={item.number}
                                    ref={(element) => navbarRefArray.current.push(element)}>
                                        {item.name}
                            </button>
                        )})}
                </div>
            <div className="search"><SearchIcon /></div>
        </nav>
    )

}