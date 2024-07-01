import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho/index'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container } from './style'

import Colors from './theme/colors'

function App() {
  return (
    <ThemeProvider theme={Colors}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
