import styled from 'styled-components'
import { Props } from '../Cabecalho'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 30px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BtnPesquisar = styled.button<Props>`
  background-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  height: 35px;
  padding: 0 16px;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '18px')};
  color: ${(props) => props.theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corPrincipal};

  @media (max-width: 768px) {
    font-size: 15px;
    width: 8em;
  }
`
