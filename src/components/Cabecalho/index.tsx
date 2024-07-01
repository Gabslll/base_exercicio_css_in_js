import { Head as StyledHead } from './style'

export type Props = {
  children: string
  fontSize?: number
}

const Cabecalho = () => (
  <header>
    <StyledHead fontSize={40}>EBAC Jobs</StyledHead>
  </header>
)

export default Cabecalho
