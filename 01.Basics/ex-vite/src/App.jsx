// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Link, Route, Routes } from 'react-router-dom';
import "./App.css";
import AboutPage from './components/AboutPage';
import HomePage from "./components/HomePage";
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/NotFoundPage">없는페이지</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
export default App;
