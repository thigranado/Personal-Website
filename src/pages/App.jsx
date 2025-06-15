import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Blog from './thoughts';

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
    </BrowserRouter>
  );
}
