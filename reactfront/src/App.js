import './App.css';
import logo from './logo.svg';

//importamos los componentes
import CompCreateCita from './cita/CreateCita';
import CompEditCita from './cita/EditCita';
import CompShowCitas from './cita/ShowCitas';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowCitas />} />
            <Route path='/create' element={ <CompCreateCita />} />
            <Route path='/edit/:id' element={ <CompEditCita />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
