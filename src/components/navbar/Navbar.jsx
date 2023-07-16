import React, { useContext } from "react";
import "./navbar.scss"
import { ArrowDownward, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext)
    window.onscroll = ()=>{
        setIsScrolled( window.pageYOffset===0? false:true);
        return ()=> (window.onscroll = null);
    }
    return(
        <div className={isScrolled ? "navbar scrolled":"navbar" }>
            <div className="container">
                <div className="left">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHViINwGA-Qgaqqen16iqUGf3P8pTWeXo3ByR6JZwr&s" 
                    alt="" />
                    <Link to="/" className="link">
                    <span>Homepage</span>
                    </Link>
                    <Link to="/series" className="link">
                    <span>Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                    <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" 
                    alt="logo" />
                    <div className="profile">
                       <ArrowDownward className="icon"/>
                       <div className="options">
                        <span>Settings</span>
                        <span onClick={()=>dispatch(logout())}>Logout</span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Navbar;