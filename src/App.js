import './App.css';
import MainLayout from './pages/layouts';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import Courses from './pages/courses';
import AboutUs from './pages/about-us';
import Pricing from './pages/pricing';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <MainLayout>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/Courses' element={<Courses />}></Route>
            <Route path='/about-us' element={<AboutUs />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
