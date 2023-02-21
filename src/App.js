import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about';
import './App.css';
import Apply from './apply';
import Faculties from './faculties';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Login from './login';
import Message from './message';
import Profile from './profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path="/profile" element={
    <div className="app">
    <Header/>
    <Profile/>
    <Footer/>
   
    </div>
      }></Route>
      
      <Route path="/message" element={
    <div className="app">
    <Header/>
    <Message/>
   
    </div>
      }></Route>
    <Route path="/apply" element={
    <div className="app">
    <Header/>
    <Apply/>
    <Footer/>
   
    </div>
      }></Route>
    <Route path="/login" element={
    <div className="app">
    <Header/>
    <Login/>
    <Footer/>
   
    </div>
      }></Route>
      <Route path="/about" element={
        <div className="app">
        <Header/>
        <About/>
        <Footer/>
       
        </div>
          }></Route>
           <Route path="/faculties" element={
        <div className="app">
        <Header/>
       
        <Faculties/>
       <Footer/>
        </div>
          }></Route>
      <Route path="/" element={
    <div className="app">
    <Header/>
   
   <Home/>
    <Footer/>
    </div>
      }></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;