import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Restaurant from './Restaurant';
import EmployeeD from './EmployeeD';
import Myclass from './Myclass';
import Firebase from 'Fibebase';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/Rest" element={<Restaurant/>}/>
        <Route path="/EmployeeD" element={<EmployeeD/>}/>
        <Route path='/class' element={<Myclass/>}/>
        
      </Routes>
      <Route path="/Firebase" element={<Firebase/>}/>

      
      
    </BrowserRouter>
    
    </>
  );
}

export default App;