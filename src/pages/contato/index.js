import React from 'react'
import api from '../../services/api'
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

  const handleSubmit = async (e) => {
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      dropdown,
      tagsSelected,
      checkboxSelected
    }

    api.post('cards', {
        name: data.name,
        desc:`${data.email}\n${data.message}`
    }).then(cardResponse => {
      console.log(cardResponse.data, cardResponse.status)
      const tagsInterval = setInterval(() => {
        tagsSelected.forEach(async tag => {
          const tagResponse = await api.post(`labels/add/${cardResponse.data.id}`, null, {
            value: tag,
          })
          console.log('tag',tag)
        })
      }, 1000)
      clearInterval(tagsInterval)
     
    })
    
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
    {
      "id": "609092d5d41eeff1fa76ec98",
      "name": "Web",
    },
    {
      "id": "609092d5d41eeff1fa76ec99",
      "name": "Illustration",  
    },
    {
      "id": "609092d5d41eeff1fa76ec9c",
      "name": "Graphics",   
    },
    {
      "id": "609092d5d41eeff1fa76ec9e",
      "name": "UI",
    },
    {
      "id": "609092d5d41eeff1fa76eca0",
      "name": "Design",
    },
    {
      "id": "609092d5d41eeff1fa76eca1",
      "name": "App",
    },
    {
      "id": "609487725f777d1abaa42388",
      "name": "Iphone",
    },
    {
      "id": "6094877b9827598c0406d458",
      "name": "Interface",
    },
    {
      "id": "60948786ad8d373da8d95e6a",
      "name": "Icon",
    },
    {
      "id": "609487931d5c481ce48b770a",
      "name": "Web Design",
    }
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