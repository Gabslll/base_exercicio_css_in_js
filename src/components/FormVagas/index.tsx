import { FormEvent, useState } from 'react'

import { Form as StyledForm } from './style'
import { Campo as StyledCampo } from './style'
import { BtnPesquisar as StyledBtnPesquisar } from './style'

export type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <StyledCampo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <StyledBtnPesquisar fontSize={18} type="submit">
        Pesquisar
      </StyledBtnPesquisar>
    </StyledForm>
  )
}
export default FormVagas
