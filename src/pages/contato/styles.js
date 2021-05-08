import styled from 'styled-components'

export const Input = styled.input`
  width:300px;
  height: 35px;
  background-color:#f1f1f1;
  border-radius:10px;
  margin-top:2%;
  @media(max-width: 800px) {
    width:100%;
  }
`

export const Label = styled.label`
  font-weight:bold;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  width: 60vw;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`
export const FormContainer = styled.div`
  margin-right: 5%;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0 8% 0;
`

export const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  margin-top:5%;
  @media(max-width: 800px) {
    flex-direction: row;
    justify-content:space-around;
  }
`

export const CheckboxItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5%;
`
export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 250px;
`
export const Tag = styled.div`
  background-color: #EFFFFA;
  color: #0D0C1D;
  font-size: 0.75rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  margin: 0 5px 5px 0; 
`

export const Button = styled.button`
  color:#d2d2d2;
  border-radius:5px;
  padding:5px;
  font-weight:bold;
  background-color:#6B61ED;
`

