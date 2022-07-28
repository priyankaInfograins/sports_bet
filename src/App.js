import Header from './Common/Header';
import './assets/css/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Pages/Main';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';  
import Footer from './Common/Footer';
function App() {
  return (
    <div>
      
      <BrowserRouter basename='/sports_bet/'>
      <Header />
        <Routes>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
