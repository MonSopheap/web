import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import Courses from './pages/courses';
import AboutUs from './pages/about-us';
import PageNotFound from './pages/page-not-found';
import MainLayout from './layouts';
import Pricing from './components/Pricing';

function App() {
  return (
    <>
      <BrowserRouter basename='/web'>
        <MainLayout>
          <Routes>
            <Route path='' element={<Home />}></Route>
            <Route path='courses' element={<Courses />}></Route>
            <Route path='about-us' element={<AboutUs />}></Route>
            <Route path='pricing' element={<Pricing />}></Route>
            <Route path='terms-and-conditions' element={<Pricing />}></Route>
            {/* 👇️ only match this when no other routes match */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
