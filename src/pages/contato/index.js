import React from 'react'
import { Input, Wrapper, Form, FormGroup } from './styles'

export default function Contato(){
  const nameRef= React.useRef()

  function handleSubmit(e){
    e.preventDefault()
    console.log(nameRef.current.value)
  }
  return(
    <Wrapper>
      <h1>Formulário</h1>
      <Form>

        <div>
          <FormGroup>
            <label htmlFor={"txtName"}>Nome</label>
            <Input placeholder={"John Doe"} id="txtName" ref={nameRef} type="text"/>
          </FormGroup>
          <FormGroup>
          <label htmlFor={"txtEmail"}>Email</label>
          <Input placeholder={"email@domain.com"} id="txtEmail" type="email"/>
          </FormGroup>
          <textarea placeholder={"Something"} style={{resize:'block'}}/>
        </div>

        <div>
          <input type="checkbox"/>
          <label>Opção 1</label>
          <input type="checkbox"/>
          <label>Opção 2</label>
          <input type="checkbox"/>
          <label>Opção 3</label>
          <br/>
          <br/>
          <FormGroup>
          <label>Dropdown</label>
          <select>
            <option>selecione</option>
            <option>Select 1</option>
            <option>Select 2</option>
            <option>Select 3</option>
          </select>
          </FormGroup>
          <div>
            <span>
              web
            </span>
          </div>
          <div>
            <span>
              Illustration
            </span>
          </div>
          <div>
            <span>
              graphics
            </span>
          </div>
          <button type="submit" onClick={handleSubmit}>Enviar</button>
        </div>

      </Form>
    </Wrapper>
  )
}