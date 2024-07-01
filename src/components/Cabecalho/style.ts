import styled from 'styled-components'
import { Props } from '.'

export const Head = styled.header<Props>`
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.color};
  text-align: center;
  padding: 24px 0;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '40px')};
`
