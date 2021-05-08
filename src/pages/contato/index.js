import React from 'react'
import api from '../../services/api'
import { emailValidate } from '../../Utils/validation'
import { 
  Input,
  Label,
  Wrapper,
  Form, 
  FormGroup, 
  CheckboxGroup, 
  CheckboxItem, 
  FormContainer, 
  Tag, 
  TagContainer,
  Button
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
  const [checkitemsSelected, setCheckitemsSelected] = React.useState([])
  const [tags, setTags] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useLayoutEffect(() => {
    (async () => {
      const response = await api.get('labels')
      setTags(response.data)
      setLoading(true)
    })()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      dropdown,
      tagsSelected,
      checkitemsSelected
    }
    if(!data.name){
      alert('Por favor preencha o campo nome')
      nameRef.current.focus()
      return
    }

    if(!emailValidate.exec(data.email)){
      alert('Por favor preencha o campo de email corretamente')
      emailRef.current.focus()
      return
    }
    if(!data.message){
      alert('Por favor preencha o campo mensagem')
      messageRef.current.focus()
      return
    }
     api.post('cards', {
        name: data.name,
        desc:`${data.email}\n${data.message}`,
    }, { params : { idList: data.dropdown } })
    .then(async cardResponse => {
      // console.log(cardResponse.data.idCard, cardResponse.status)
      const { idCard } = cardResponse.data;

      tagsSelected.forEach(async value => {
        await api.post('labels/add', {
          value,
          idCard
        })
        .catch(err => alert('Erro ao adicionar as tags'))
      })

      await api.post('checklists', {idCard})
        .then(checklist => {
        checkitemsSelected.forEach(async checkitem => {
          await api.post('checkitems', null, {
            params: {
              idChecklist: checklist.id,
              name: checkitem
            }
          })
        })
      })
   
    }).catch(err => alert('Erro ao enviar formulário'))

    alert('Dados enviados com sucesso!')
    
    nameRef.current.value = TXT_INITIAL_VALUE
    emailRef.current.value = TXT_INITIAL_VALUE
    messageRef.current.value = TXT_INITIAL_VALUE
    setDropdown(NUMBER_INITIAL_VALUE)
    setTagsSelected(ARRAY_INITIAL_VALUE)
    setCheckitemsSelected(ARRAY_INITIAL_VALUE)
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
    const alreadySelected = checkitemsSelected.findIndex(tag => tag === id)
    if(alreadySelected >= 0){
      const filteredItems = checkitemsSelected.filter(tag => tag !== id)
      setCheckitemsSelected(filteredItems)
    }else{
      setCheckitemsSelected([...checkitemsSelected, id])
    }
  }

  const checkboxs = [
    { id:0, option: 'Opção 1' },
    { id:1, option: 'Opção 2' },
    { id:2, option: 'Opção 3' },
  ]

  if(!loading){
    return(
      <h1>loading...</h1>
    )
  }else{
    return(
      <Wrapper>
        <h1>Formulário</h1>
        <Form>

          <FormContainer>
            <FormGroup>
              <Label htmlFor={"txtName"}>Nome</Label>
              <Input 
                placeholder={"John Doe"} 
                id="txtName" 
                ref={nameRef} 
                type="text"
                autoComplete={'false'}
                />
            </FormGroup>
            <FormGroup>
              <Label htmlFor={"txtEmail"}>Email</Label>
              <Input 
                placeholder={"email@domain.com"} 
                id="txtEmail" 
                ref={emailRef}
                type="email"
                />
            </FormGroup>
            <FormGroup>
              <Label htmlFor={"txtMessage"}>Mensagem</Label>
              <textarea 
                id="txtMessage" 
                rows="9" 
                placeholder={"Type something"} 
                style={{resize:'vertical', backgroundColor:'#f1f1f1'}}
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
                    <input
                      checked={checkitemsSelected.includes(checkbox.id) ? true : false}
                      id={`${checkbox.option}`} 
                      type="checkbox"/>
                    <Label htmlFor={`${checkbox.option}`}>{checkbox.option}</Label>
                  </CheckboxItem>
                ))}
              </CheckboxGroup>
            </FormGroup>
            <FormGroup>
            <Label>Dropdown</Label>
            <select value={dropdown} onChange={(e) => setDropdown(e.target.value)}>
              <option value="0">Sem experiência</option>
              <option value="1">1-2 anos de experiência</option>
              <option value="2">3-5 anos de experiência</option>
              <option value="3">+ 5 anos de experiência</option>
            </select>
            </FormGroup>
            <FormGroup>
              <h2 style={{marginTop:-1}}>Tags</h2>
              <TagContainer>
                {tags.map(tag => (
                  <Tag
                    key={tag.id} 
                    style={
                      tagsSelected.includes(tag.id) 
                      ?{ backgroundColor: '#6B61ED', color: '#EFFFFA', fontWeight:'bold', textTransform:'uppercase'} 
                      : { backgroundColor: '#d2d2d2', fontWeight:'bold', textTransform:'uppercase'}}
                    onClick={() => handleTagClick(tag.id)}
                    >
                    <span>{tag.name}</span>
                  </Tag>
                ))}
              </TagContainer>
            </FormGroup>
          
            <Button type="reset" onClick={handleSubmit}>Enviar</Button>
          </div>

        </Form>
      </Wrapper>
    )
  }
}