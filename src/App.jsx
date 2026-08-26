import { Routes, Route } from 'react-router';
import ProjectPage from './pages/Project/ProjectPage';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;