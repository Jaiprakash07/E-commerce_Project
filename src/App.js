import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Navpage/Home';
import { Design } from './Navpage/Design';
import { Handprint } from './Navpage/Handprint';
import { Ikebana } from './Navpage/Ikebana';
import { Contactus } from './Navpage/Contactus';
import { Blog } from './Navpage/Blog';
import { More } from './Navpage/More';
import { Error } from './Navpage/Error';
import { Mainheader } from './Essential/Mainheader';
import { Footer } from './Essential/Footer';
import Wishlist from './Navpage/Wishlist';
import Arts from './Navpage/Arts';
import Bonechina from './Navpage/Bonechina';
import Flowercrafts from './Navpage/Flowercrafts';
import Architectureart from './Navpage/Architectureart';
import Literatureart from './Navpage/Literatureart';
import Theaterart from './Navpage/Theaterart';
import Ceramicsart from './Navpage/Ceramicsart';
import Sculptureart from './Navpage/Sculptureart';
import Paintingart from './Navpage/Paintingart';
import Glassetching from './Navpage/Glassetching';
import Glassblowing from './Navpage/Glassblowing';
import Daffodilcraft from './Navpage/Daffodilcraft';
import Handprintcraft from './Navpage/Handprintcraft';
import Furniturecrafts from './Navpage/Furniturecrafts';
import Glasscrafts from './Navpage/Glasscrafts';
import Aboutus from './Navpage/Aboutus';
import Stone from './Navpage/Stone';
import Fabrication from './Navpage/Fabrication';
import Catalog from './Navpage/Catalog';

function App() {
  return (
    <>
      <Mainheader />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Design' element={<Design />} />
        <Route path='/Handprint' element={<Handprint />} />
        <Route path='/Ikebana' element={<Ikebana />} />
        <Route path='/Contactus' element={<Contactus />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/More' element={<More />} />
        <Route path='/Wishlist' element={<Wishlist/>} />
        <Route path='/Design/Arts' element={<Arts />} />
        <Route path='/Design/Bonechina' element={<Bonechina />} />
        <Route path='/Design/Flowercrafts' element={<Flowercrafts />} />
        <Route path='/Design/Arts/Architectureart' element={<Architectureart />} />
        <Route path='/Design/Arts/Literatureart' element={<Literatureart />} />
        <Route path='/Design/Arts/Theaterart' element={<Theaterart />} />
        <Route path='/Design/Arts/Ceramicsart' element={<Ceramicsart />} />
        <Route path='/Design/Bonechina/Sculptureart' element={<Sculptureart />} />
        <Route path='/Design/Bonechina/Paintingart' element={<Paintingart />} />
        <Route path='/Design/Bonechina/Glassetching' element={<Glassetching />} />
        <Route path='/Design/Bonechina/Glassblowing' element={<Glassblowing />} />
        <Route path='/Design/Flowercrafts/Daffodilcraft' element={<Daffodilcraft />} />
        <Route path='/Design/Flowercrafts/Handprintcraft' element={<Handprintcraft />} />
        <Route path='/Design/Flowercrafts/Furniturecrafts' element={<Furniturecrafts />} />
        <Route path='/Design/Flowercrafts/Glasscrafts' element={<Glasscrafts />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Stone' element={<Stone />} />
        <Route path='/Fabrication' element={<Fabrication />} />
        <Route path='/Catalog' element={<Catalog />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
