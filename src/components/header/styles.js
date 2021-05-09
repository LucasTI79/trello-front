import styled from 'styled-components'

export const Wrapper = styled.header`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  top:0;
`

export const Link = styled.a`
  text-decoration:none;
  color:#fff;
  font-weight:bold;
  text-transform:uppercase;
  &:visited{
    text-decoration:none
  }
`
