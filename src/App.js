import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Banners } from './components/reusable_banners/banners';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Technology } from './components/technology_cards/technology_card';
import {Congratscard} from './components/congrats_card'
import {Superover} from './components/super_over_leauge/super_over'
import { Socialbutton } from './components/social_button/social_button';
import { Notification } from './components/Notifications_app/notification';
import { Login } from './components/login_design/login_design';
import { Feedback } from './components/feedback_app/feedback';
import { Feed } from './components/feedback_app/feed_back';
import { Hook } from './components/hooks_assign/hooks';
import { Counter } from './components/fruits_counter/fruits_counter';
import { DateF } from './components/date_function/date_function';
import { Demo } from './components/demo/demo';
import { Jsonassign } from './components/json_assignment/json_assign';
import { Jsonproduct } from './components/json_assignment/json_products';
import { Portfolio } from './components/Portfolio/portfolio';
import { Qualification } from './components/Portfolio/qualification';
import { Contact } from './components/Portfolio/Contact';
import { Certificates } from './components/Portfolio/Certificates';
import { Skills } from './components/Portfolio/skills';

function App() {
  return (
    <>


   <BrowserRouter>
           <Routes>
             <Route path='/' element={[<Banners/>,<Login/>]}></Route>
             <Route path='/tech' element={[<Banners/>,<Technology/>]}></Route>
             <Route path='/noti'element={[<Banners/>,<Notification/>]}></Route>
             <Route path='/card'element={[<Banners/>,<Congratscard/>]}></Route>
             <Route path='/super'element={[<Banners/>,<Superover/>]}></Route>
             <Route path='/social'element={[<Banners/>,<Socialbutton/>]}></Route>
             <Route path='/login' element={[<Banners/>,<Login/>]}></Route>
             <Route path='/feedback' element={[<Banners/>,<Feedback/>]}></Route>
             <Route path='/FEED' element={[<Banners/>,<Feedback/>,<Feed/>]}></Route>
             <Route path='/counter' element={[<Banners/>,<Hook/>]}></Route>
             <Route path='/fruitcounter' element={[<Banners/>,<Counter/>]}></Route>
             <Route path='/datefunction' element={[<Banners/>,<DateF/>]}></Route>
             <Route path='/demo' element={[<Banners/>,<Demo/>]}></Route>
             <Route path='/jsonfile' element={[<Banners/>,<Jsonassign/>]}></Route>
             <Route path='/products/:id' element={[<Banners/>,<Jsonproduct/>]}></Route>
             <Route path='/portfolio' element={[<Banners/>,<Portfolio/>,<Certificates/>,<Qualification/>,<Skills/>,<Contact/>]}></Route>
             <Route path='/portfolio/qualification' element={[<Portfolio/>,<Qualification/>]}></Route>
             <Route path="/portfolio/home" element={[<Portfolio/>,<Certificates/>,<Qualification/>,<Skills/>,<Contact/>]}></Route>
             <Route path="/portfolio/contact" element={[<Portfolio/>,<Contact/>]}></Route>
             <Route path="/portfolio/certificates" element={[<Portfolio/>,<Certificates/>]}></Route>
             <Route path="/portfolio/skills" element={[<Portfolio/>,<Skills/>]}></Route>

           </Routes> 
   
   </BrowserRouter> 

    

   
    </>
      
  );
}

export default App;
