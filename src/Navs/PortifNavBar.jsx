import {Navbar, NavLinks, NavLink, Logo} from '../styles/appStyles';
import { Link } from 'react-router-dom';
        
export default function AboutNavBar() {

         return (
        <Navbar>
            <Logo><Link to="/home">[Granado]</Link></Logo>
                <NavLinks>
                    <NavLink><Link to="/about">About Me</Link></NavLink>
                    <NavLink><Link to="/blog">Thoughts</Link></NavLink>
                </NavLinks>
        </Navbar>
            )
    };