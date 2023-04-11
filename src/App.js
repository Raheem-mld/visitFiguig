import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Presentation from './components/presentation/Presentation';
import About from './components/understand/About';
import Safety from './components/safetyTips/Safety';
import Hotel from './components/hotels/Hotel';
import Nanna from './components/hotels/hotel-details/nanna/Nanna';
import Oasis from './components/hotels/hotel-details/oasis/Oasis';
import Zenaga from './components/hotels/hotel-details/zenaga/Zenaga';
import Ajdir from './components/hotels/hotel-details/ajdir/Ajdir';
import Transportation from './components/transportation/Transportation';
import Do from './components/entartainments/Do';
import Akbouch from './components/attractions/akbouch/Akbouch';
import Culture from './components/attractions/culture/Culture';
import Gallery from './components/attractions/date-gallery/Gallery';
import Swimming from './components/attractions/swimming/Swimming';
import Monuments from './components/attractions/monuments/Monuments';
import Medina from './components/attractions/oldMedina/Medina';
import Village from './components/attractions/eighty-village/Village';
import Eat from './components/eat/Eat';
import Berkoukes from './components/eat/food-types/berkoukes/Berkoukes';
import Dates from './components/eat/food-types/dates/Dates';
import Pates from './components/eat/food-types/pates/Pates';
import Trid from './components/eat/food-types/trid/Trid';
import Couscous from './components/eat/food-types/couscous/Couscous';
import Arts from './components/arts/Arts';
import ArtsandMusic from './components/arts/arts-music/ArtsandMusic';
import Music from './components/arts/music/Music';
import Handicraft from './components/arts/handicraft/Handicraft';




function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/presentation' element={<Presentation/>} />
        <Route path='/understand' element={<About/>}/>
        <Route path='/travel-safety-tips' element={<Safety/>}/>
        <Route path='/hotels' element={<Hotel/>}/>
        <Route path='/hotels/Maison-Nanna' element={<Nanna/>}/>
        <Route path='/hotels/Auberge-Oasis' element={<Oasis/>}/>
        <Route path='/hotels/Riyad-Zenaga' element={<Zenaga/>}/>
        <Route path='/hotels/hôte-Ajdir' element={<Ajdir/>}/>
        <Route path='/transportation' element={<Transportation/>}/>
        <Route path='/do' element={<Do/>}/>
        <Route path='/do/akbouch' element={<Akbouch/>}/>
        <Route path='/do/oasis-culture' element={<Culture/>}/>
        <Route path='/do/date-gallery' element={<Gallery/>}/>
        <Route path='/do/swimming' element={<Swimming/>}/>
        <Route path='/do/visit-monuments' element={<Monuments/>}/>
        <Route path='/do/old-medina' element={<Medina/>}/>
        <Route path='/do/eighty-villages' element={<Village/>}/>
        <Route path='/eat' element={<Eat/>}/>
        <Route path='/eat/berkoukes' element={<Berkoukes/>}/>
        <Route path='/eat/dates' element={<Dates/>}/>
        <Route path='/eat/pates' element={<Pates/>}/> 
        <Route path='/eat/trid' element={<Trid/>}/> 
        <Route path='/eat/couscous' element={<Couscous/>}/>
        <Route path='/arts' element={<Arts/>}/>
        <Route path='/arts&music' element={<ArtsandMusic/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/handicraft' element={<Handicraft/>}/>

      </Routes >
    </BrowserRouter>
  );
}

export default App;
