import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componants/Navbar'
import Banner from './componants/Banner';
import Sections from './componants/Sections';
import Footer from './componants/Footer'
import Categories from './componants/Categories';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Categories' element={<Categories/>}></Route>
    </Routes>
    </BrowserRouter>
    <Banner/>
    <Categories/>
    <Sections/>
    <Footer/>
    </>
  );
}

export default App;
