import React from 'react'
import { Wrapper } from './styles'

export default function Header (){
  return(
    <Wrapper>
      <div style={{height:50, width: 62}}>
      <svg id="logo-slideworks" x="0px" y="0px" viewBox="0 0 172.914 86.451" enable-background="new 0 0 172.914 86.451">
          <title>Logotipo da Slideworks</title>
          <path class="capsule" fill="#000" d="M129.688,0H43.226C19.353,0,0,19.352,0,43.225S19.353,86.45,43.226,86.45h86.462
          c23.87,0,43.225-19.352,43.225-43.225S153.558,0,129.688,0 M129.688,13.726c16.265,0,29.502,13.234,29.502,29.499
          c0,16.269-13.237,29.506-29.502,29.506H43.226c-16.266,0-29.503-13.237-29.503-29.506c0-16.265,13.237-29.499,29.503-29.499H129.688
          z"></path>
          <path class="ball" fill="#000" d="M64.842,43.225c0-11.937-9.677-21.613-21.616-21.613c-11.938,0-21.613,9.676-21.613,21.613
          c0,11.94,9.676,21.62,21.613,21.62C55.166,64.845,64.842,55.166,64.842,43.225"></path>
      </svg>
      </div>
      <h1>Header</h1>
    </Wrapper>
  )
}