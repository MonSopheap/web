import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import TermsAndConditions from './pages/TermsAndConditions';
import MainLayout from "./layouts"
import Courses from "./pages/Courses"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/Page404"
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter basename='/web'>
        <MainLayout>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='courses' element={<Courses />}></Route>
            <Route path='about-us' element={<AboutUs />}></Route>
            <Route path='pricing' element={<Pricing />}></Route>
            <Route path='terms-and-conditions' element={<TermsAndConditions />}></Route>
            {/* 👇️ only match this when no other routes match */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
