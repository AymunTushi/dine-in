
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';

import About from './Pages/About/About'
import Notfound from './Pages/Shared/Notfound/Notfound';
import ServiceDetail from './Pages/Services/ServiceDetail/ServiceDetail';
import Registration from './Pages/Registration/Registration/Registration';
import Login from './Pages/Registration/Registration/Login/Login';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>} />
      
      <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>} />     
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Registration/>} />
      <Route path="/checkout" element={
      <RequireAuth>
      <Checkout/>
      </RequireAuth> }
      />
      <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
