import React from 'react'
import './App.css';
import LandingPage from './stores/pages/LandingPage';
import { Routes,Route } from 'react-router-dom';

import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import FridgesPage from './stores/pages/FridgesPage';
import SpeakersPage from './stores/pages/SpeakersPage';
import MenPage from './stores/pages/MenPage';
import WomenPage from './stores/pages/WomenPage';
import TvPage from './stores/pages/TvPage';
import WatchesPage from './stores/pages/WatchesPage';

import MobileSingle from './singles/MobileSingle';
import TvSingle from './singles/TvSingle';
import AcSingle from './singles/AcSingle';
import FridgeSingle from './singles/FridgeSingle';
import SpeakerSingle from './singles/SpeakerSingle';
import WatchSingle from './singles/WatchSingle';
import MenSingle from './singles/MenSingle';
import WomenSingle from './singles/WomenSingle';

import UserCart from './stores/UserCart';
import SigninPage from './stores/pages/SigninPage';
import Wishlist from './stores/pages/Wishlist';
import Admin from './stores/pages/Admin';
import NewProductPage from './stores/pages/NewProductPage';
import EditPage from './stores/pages/EditPage';
import ThankYou from './stores/pages/Thankyou';
import Checkout from './stores/pages/Checkout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/mobiles' element={<MobilePage/>} />
        <Route path='/ac' element={<AcPage/>} />
        <Route path='/tv' element={<TvPage/>} />
        <Route path='/fridges' element={<FridgesPage/>} />
        <Route path='/speakers' element={<SpeakersPage/>} />
        <Route path='/men' element={<MenPage/>} />
        <Route path='/women' element={<WomenPage/>} />
        <Route path='/watches' element={<WatchesPage/>} />

        <Route path='/mobiles/:id' element={<MobileSingle/>}/>
        <Route path='/men/:id' element={<MenSingle/>}/>
        <Route path='/women/:id' element={<WomenSingle/>}/>
        <Route path='/tv/:id' element={<TvSingle/>}/>
        <Route path='/ac/:id' element={<AcSingle/>}/>
        <Route path='/fridges/:id' element={<FridgeSingle/>}/>
        <Route path='/speakers/:id' element={<SpeakerSingle/>}/>
        <Route path='/watches/:id' element={<WatchSingle/>}/>

        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/cart' element={<UserCart/>} />
        <Route path='/signin' element={<SigninPage/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/newproduct' element={<NewProductPage/>} />
        <Route path='/edit/:id' element={<EditPage/>} />
        <Route path='/thankyou' element={<ThankYou/>} />
        <Route path='/checkout' element={<Checkout/>} />
        


     </Routes>
     
    </div>
  );
}

export default App;
