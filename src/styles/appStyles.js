import styled from 'styled-components';

    export const Navbar = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    width: 97.8%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    z-index: 1000;
    `;

    export const Logo = styled.div`
    font-size: 2rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin-left: 60px;
    transition: 0.5s all ease-out;
    margin-top: 10px;
    font-weight: 100;
    color: white;

    &:hover {
        transform: scale(1.05);
        transition: 0.4s all ease-out;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        }
    `;

    export const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 25px;
    margin-right: 10%;
    margin-top: 30px;
    `;

    export const NavLink = styled.li`
    a {
        color: white;
        text-decoration: none;
        font-weight: 550;
        font-family: sans-serif, Georgia;
        font-size: 1rem;

        &:hover {
        color:rgb(182, 159, 27);
        }
    }
    `;