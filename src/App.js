import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/start_page/StartPage';
import PersonalAcount from './pages/personal_acount/PersonalAcount';
import Test from './pages/test_page/Test';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element ={<StartPage/>}/>
        <Route path='pa' element ={<PersonalAcount/>}/>
        <Route path='test' element ={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
