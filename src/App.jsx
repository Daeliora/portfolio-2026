import { Routes, Route } from 'react-router';
import { motion } from 'motion/react';

function Home() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Accueil
    </motion.h1>
  );
}

function Project() {
  return <h1>Projet</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projets/:slug" element={<Project />} />
    </Routes>
  );
}

export default App;