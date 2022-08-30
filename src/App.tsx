import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from './pages/Home'


function App() {
  return (
      <BrowserRouter>
      <h1>Cadastre-se</h1>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/users" element={<Users/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
