import { NavLink } from "react-router-dom";
import './mobilenav.css';

const MobileNav = props => {
    return(
        <nav className="mobileNav">
           <ul >
               <li><NavLink to={'/'}><span class="material-icons-outlined">
home
</span></NavLink></li>
               <li><NavLink to={'/explore'}><span class="material-icons-outlined">
explore
</span></NavLink></li>
               <li><NavLink to={'/bookmarks'}><span class="material-icons-outlined">
bookmark
</span></NavLink></li>
               </ul> 
        </nav>
    )
}

export default MobileNav;