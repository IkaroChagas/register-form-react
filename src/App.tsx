import { MainRoutes } from './routes/MainRoutes'
import * as C from './App.styles'
import { Context } from './contexts/context'
import { useContext } from 'react';
import { Button } from './components/Button'
import { Link } from 'react-router-dom';


function App() {
  const { state, dispatch } = useContext(Context)

  const handleThemeOption = () => {
    if (state.theme.status === 'dark') {
      dispatch({
        type: 'SWITCH_THEME',
        payload: {
          status: 'light',
          bgColor: '#ddd',
          boxShaodw: '0 0 10px #333',
          bgColorTransparent: 'rgba(255,255,255,0.65)'
        }
      })
    } else {
      dispatch({
        type: 'SWITCH_THEME',
        payload: {
          status: 'dark',
          bgColor: '#333',
          boxShaodw: '0 0 10px #ddd',
          color: '#fff',
          bgColorTransparent: 'rgba(3,3,3,0.7)'
        }
      })
    }
  }

  return (

    <C.Body themeOptions={state.theme}>
      <C.Header>
        <C.Logo>
          <C.LogoText>Dev Sign</C.LogoText>
          <C.Theme onClick={handleThemeOption}>
            <C.ThemeContainer>
              <C.ThemeCircle themeOptions={state.theme} />
            </C.ThemeContainer>
          </C.Theme>
        </C.Logo>

        <C.Menu>
          <Link to='/'><Button content='Área de Cadastro' bgColorButton="#00ADB5" /></Link>
          <Link to='/users'><Button content='Lista de usuários' bgColorButton="#03494d" /></Link>
        </C.Menu>
      </C.Header>

      <C.Line>
        <MainRoutes />
      </C.Line>

      <C.Footer>
        <C.Link href='https://github.com/IkaroChagas' target="_blank">Íkaro Chagas</C.Link>
      </C.Footer>
    </C.Body >
  );

}

export default App;
