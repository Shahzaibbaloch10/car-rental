import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Index from './pages/indexpage';
import Header from './components/header/header';
import Rentcar from './pages/indexpage/rent-your-car/rentcar';
import Login from './components/account/login';
import Signup from './components/account/signup';
import Vehicles from './pages/ourcars/vehicles';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Cardetailform from './components/cardetails/cardetailform';
import PrivateRoute from './PrivateRoute';
import Profile from './pages/profile/profile';
function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Header/>
<Routes>
<Route path='/' element={<><Index/></>}/>
<Route path='/contact' element={<><Contact/></>}/>
<Route path='/yourcar' element={<><Rentcar/></>}/>
<Route path='/login' element={<><Login/></>}/>
<Route path='/signup' element={<><Signup/></>}/>
<Route path='/allcars' element={<><Vehicles/></>}/>
<Route path='/about' element={<><About/></>}/>
<Route element={<><PrivateRoute/></>}>

<Route path='/profile' element={<><Profile/></>}/>
<Route path='/cardetailsform' element={<><Cardetailform/></>}/>
</Route>

</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
