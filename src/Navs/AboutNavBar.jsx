import {Navbar, NavLinks, NavLink, Logo} from '../styles/appStyles';
import { Link } from 'react-router-dom';
        
export default function AboutNavBar() {
    return (
        <Navbar>
            <Link to="/home"><Logo>[Granado]</Logo></Link>
                <NavLinks>
                    <NavLink><Link to="/portfolio">Portfolio</Link></NavLink>
                    <NavLink><Link to="/blog">Thoughts</Link></NavLink>
                </NavLinks>
        </Navbar>
    )
};