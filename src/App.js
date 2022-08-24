
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/home';
import Association from './Pages/association';
import Admin from './Pages/admin';
import Contact from './Pages/contact';
import Nav from './components/nav';
import NotFound from './Pages/notfound';

function App() {
  return (
    
    
    <BrowserRouter>
      
      <Nav/>
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/:slug' element={<Association />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='*' element={<NotFound />}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
