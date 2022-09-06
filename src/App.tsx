import { MainRoutes } from './routes/MainRoutes'
import * as C from './App.styles'
import { Context } from './contexts/context'
import { useContext } from 'react';
import { Button } from './components/Button'
import { Link } from 'react-router-dom';
import Wave from './images/wave.svg'




function App() {
  const { state, dispatch } = useContext(Context)

  const handleThemeOption = () => {
    if (state.theme.status === 'dark') {
      dispatch({
        type: 'SWITCH_THEME',
        payload: {
          status: 'light',
          bgColor: '#ddd',
          color: '#000',
          boxShadow: '0 0 10px #333',
          bgColorTransparent: 'rgba(255,255,255,0.40)'
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

    <C.Body themeOptions={state.theme} className="GeneralBg"
      style={{ backgroundImage: `url(${Wave})` }}>
      <C.Header>
        <C.Logo>
          <C.LogoText></C.LogoText>
          <C.Theme onClick={handleThemeOption}>
            <C.ThemeContainer>
              <C.ThemeCircle themeOptions={state.theme} />
            </C.ThemeContainer>
          </C.Theme>
        </C.Logo>

        <C.Menu>
          <Link to='/'><Button content='Área de Cadastro' bgColorButton="#2f7bc1" /></Link>
          <Link to='/users'><Button content='Lista de usuários' bgColorButton="#2f7bc1" /></Link>
        </C.Menu>
      </C.Header>

      <C.Line>
        <MainRoutes />
      </C.Line>

      <C.Footer>
        <C.Link href='https://github.com/IkaroChagas' target="_blank">Desenvolvido por Íkaro Chagas</C.Link>
      </C.Footer>
    </C.Body >
  );

}

export default App;
