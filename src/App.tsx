import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import StyleGlobal, { Container } from './style'
import Colors from './theme/colors'

function App() {
  return (
    <ThemeProvider theme={Colors}>
      <StyleGlobal>
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </StyleGlobal>
    </ThemeProvider>
  )
}

export default App
