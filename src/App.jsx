import { Routes, Route } from 'react-router';
import ProjectPage from './pages/Project/ProjectPage';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:slug" element={<ProjectPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;