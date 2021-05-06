import React from 'react'
import { 
  Input,
  Wrapper,
  Form, 
  FormGroup, 
  CheckboxGroup, 
  CheckboxItem, 
  FormContainer, 
  Tag, 
  TagContainer 
} from './styles'

export default function Contato(){
  const TXT_INITIAL_VALUE = ''
  const NUMBER_INITIAL_VALUE = 0
  const ARRAY_INITIAL_VALUE = [] 
  const nameRef= React.useRef('')
  const emailRef = React.useRef('')
  const messageRef = React.useRef('')
  const [dropdown, setDropdown] = React.useState(0)
  const [tagsSelected, setTagsSelected] = React.useState([])
  const [checkboxSelected, setCheckboxSelected] = React.useState([])

  function handleSubmit(e){
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      dropdown,
      tagsSelected,
      checkboxSelected
    }
    const inputs = document.getElementsByTagName('input')
    // console.log(typeof inputs)
    Array.from(inputs).forEach(input => console.log(input.value))
    //console.log('inputs',inputs[0].value)
    // console.log({data})
    nameRef.current.value = TXT_INITIAL_VALUE
    emailRef.current.value = TXT_INITIAL_VALUE
    messageRef.current.value = TXT_INITIAL_VALUE
    setDropdown(NUMBER_INITIAL_VALUE)
    setTagsSelected(ARRAY_INITIAL_VALUE)
    setCheckboxSelected(ARRAY_INITIAL_VALUE)
  }

  function handleTagClick(id){
    const alreadySelected = tagsSelected.findIndex(tag => tag === id)
    if(alreadySelected >= 0){
      const filteredItems = tagsSelected.filter(tag => tag !== id)
      setTagsSelected(filteredItems)
    }else{
      setTagsSelected([...tagsSelected, id])
    }
  }

  function handleCheckboxClick(id){
    const alreadySelected = checkboxSelected.findIndex(tag => tag === id)
    if(alreadySelected >= 0){
      const filteredItems = checkboxSelected.filter(tag => tag !== id)
      setCheckboxSelected(filteredItems)
    }else{
      setCheckboxSelected([...checkboxSelected, id])
    }
  }

  const tags = [ 
    { id:0, name: 'web'},
    { id:1, name: 'illustration'},
    { id:2, name: 'graphics'},
    { id:3, name: 'ui'},
    { id:4, name: 'design'},
    { id:5, name: 'app'},
    { id:6, name: 'iphone'},
    { id:7, name: 'interface'},
    { id:8, name: 'icon'},
    { id:9, name: 'web design'},
  ]

  const checkboxs = [
    { id:0, option: 'Opção 1' },
    { id:1, option: 'Opção 2' },
    { id:2, option: 'Opção 3' },
  ]

  return(
    <Wrapper>
      <h1>Formulário</h1>
      <Form>

        <FormContainer>
          <FormGroup>
            <label htmlFor={"txtName"}>Nome</label>
            <Input 
              placeholder={"John Doe"} 
              id="txtName" 
              ref={nameRef} 
              type="text"
              autoComplete={'false'}
              />
          </FormGroup>
          <FormGroup>
            <label htmlFor={"txtEmail"}>Email</label>
            <Input 
              placeholder={"email@domain.com"} 
              id="txtEmail" 
              ref={emailRef}
              type="email"
              />
          </FormGroup>
          <FormGroup>
            <label htmlFor={"txtMessage"}>Mensagem</label>
            <textarea 
              id="txtMessage" 
              rows="9" 
              placeholder={"Type something"} 
              style={{resize:'vertical'}}
              ref={messageRef}
              />
          </FormGroup>
          
        </FormContainer>

        <div>
          <FormGroup>
            <span>{'\u00a0'}</span>
            <CheckboxGroup>
              {checkboxs.map(checkbox => (
                <CheckboxItem
                  key={checkbox.id}
                  onClick={() => handleCheckboxClick(checkbox.id)}
                  >
                  <input checked={checkboxSelected.includes(checkbox.id) ? true : false} id={`${checkbox.option}${checkbox.id}`} type="checkbox"/>
                  <label htmlFor={`${checkbox.option}${checkbox.id}`}>{checkbox.option}</label>
                </CheckboxItem>
              ))}
            </CheckboxGroup>
          </FormGroup>
          <FormGroup>
          <label>Dropdown</label>
          <select value={dropdown} onChange={(e) => setDropdown(e.target.value)}>
            <option value="0">selecione</option>
            <option value="1">Select 1</option>
            <option value="2">Select 2</option>
            <option value="3">Select 3</option>
          </select>
          </FormGroup>
          <FormGroup>
            <span style={{marginBottom:5}}>Tags</span>
            <TagContainer>
              {tags.map(tag => (
                <Tag
                  key={tag.id} 
                  style={tagsSelected.includes(tag.id) ? { backgroundColor: '#000', color: '#EFFFFA'} : { backgroundColor: '#EFFFFA' }}
                  onClick={() => handleTagClick(tag.id)}
                  >
                  <span>{tag.name}</span>
                </Tag>
              ))}
            </TagContainer>
          </FormGroup>
         
          <button type="reset" onClick={handleSubmit}>Enviar</button>
        </div>

      </Form>
    </Wrapper>
  )
}