import styled from 'styled-components'

export const Input = styled.input`
  border: 0 0 1 0 transparent solid ;
  border-radius: 5%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.div`
  width:80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`