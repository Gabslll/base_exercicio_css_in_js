import styled from 'styled-components'
import { Props } from '../Cabecalho'

export const Card = styled.li`
  border: 1px solid ${(props) => props.theme.corPrincipal};
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  li:hover {
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corSecundaria};
  }
`
export const CardTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const CardLink = styled.a<Props>`
  border-color: ${(props) => props.theme.corSecundaria};
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  border-radius: 8px;
  text-align: center;

  li:hover a {
    border-color: ${(props) => props.theme.corPrincipal};
    background-color: ${(props) => props.theme.corSecundaria};
    color: ${(props) => props.theme.corPrincipal};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
