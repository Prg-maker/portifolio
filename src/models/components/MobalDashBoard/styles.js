import styled, {css} from 'styled-components'

import {
  AiOutlineUser,
  BsInstagram,
  FiSettings,
  HiOutlineMail,
  ImLinkedin2,
  RiHome2Line,
  GoMarkGithub
} from '../../../styles/icons'

export const Container = styled.div`
  width: 100%;
  position: absolute;
  background-color: #181818;
  bottom: 0;
z-index: 10;
  display: flex;
  justify-content: center;

  @media(min-width: 700px){
    display: none;
  }   
`
export const IconsUser = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 70px;
`
const styleIconsUser = css`
  width:30px ;
  height: 30px;
  color:white ;
  cursor: pointer;
  transition: 0.1s;
  margin: 15px 0;
  
  &:hover{
    filter: brightness(0.7);
  }

`

export const Home = styled(RiHome2Line)`
  ${styleIconsUser}
`

export const User = styled(AiOutlineUser)`
  ${styleIconsUser}

`
export const Settings = styled(FiSettings)`
  ${styleIconsUser}

`
export const Email = styled(HiOutlineMail)`
  ${styleIconsUser}

`



export const IconsRedesSocias = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;

`
export const Instagram = styled(BsInstagram)`
  ${styleIconsUser}
`
export const Linkedin = styled(ImLinkedin2)`
  ${styleIconsUser}

`

export const Github = styled(GoMarkGithub)`
  ${styleIconsUser}

`