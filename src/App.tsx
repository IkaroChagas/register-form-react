import { MainRoutes } from './routes/MainRoutes'
import * as C from './App.styles'
import { Context } from './contexts/context'
import { useContext } from 'react';



function App() {
  const { state, dispatch } = useContext(Context)


  if (state.user.values())
    dispatch({
      type: 'ADD_NEW',
      payload: {
        id: '',
        name: '',
        age: 0,
        email: ''
      }
    })


  return (

    <C.Container>

      <C.header>Dev-Sign</C.header>
      <>
        <MainRoutes />
      </>

      <C.Footer>
        <C.Link href='https://github.com/IkaroChagas'></C.Link>
      </C.Footer>

    </C.Container>
  );

}

export default App;
