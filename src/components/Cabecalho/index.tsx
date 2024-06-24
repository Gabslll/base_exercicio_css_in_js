import { Head } from './style'

export type Props = {
  children: string
}

const Cabecalho = () => (
  <header>
    <Head>EBAC Jobs</Head>
  </header>
)

export default Cabecalho
