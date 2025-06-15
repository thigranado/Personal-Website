import HomeFooter from './pages/home';

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <HomeFooter>
            &copy Thiago Granado, {year}
        </HomeFooter>
    );
}