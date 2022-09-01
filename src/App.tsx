import { MainRoutes } from './routes/MainRoutes'
import * as C from './App.styles'
import {Context} from './contexts/context'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function App() {
const { state, dispatch } = useContext(Context)
  
  return (
    
    <C.Container>

    <C.header>Dev-Sign</C.header>

    <MainRoutes />


    <C.Footer>
      <C.Link href='https://github.com/IkaroChagas'></C.Link>
    </C.Footer>

   </C.Container>
  );
}

export default App;
