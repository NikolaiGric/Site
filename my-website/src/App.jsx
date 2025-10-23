// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import { Analytics } from "@vercel/analytics/next";

export default function App() {
  return (
    <div>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Главная</Link>
        <Link style={styles.link} to="/projects">Проекты</Link>
        <Link style={styles.link} to="/about">Обо мне</Link>
      </nav>

      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Analytics />
    </div>
  );
}

const styles = {
  nav: {
    background: "#222",
    padding: "15px",
    display: "flex",
    gap: "20px",
    justifyContent: "center"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px"
  }
};
