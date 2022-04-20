import { Routes, Route } from 'react-router-dom';
import LogIn from './components/FormLogin';


function App() {
  return (
   <>
     <Routes>
       <Route path="/login" element={<LogIn />} />
     </Routes>
   </>
  );
}

export default App;
