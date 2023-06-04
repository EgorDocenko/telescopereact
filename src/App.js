import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/start_page/StartPage';
import PersonalAcount from './pages/personal_acount/PersonalAcount';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element ={<StartPage/>}/>
        <Route path='pa' element ={<PersonalAcount/>}/>
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
