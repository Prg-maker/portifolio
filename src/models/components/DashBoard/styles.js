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
  width: 90px;
  height: 100vh;

  background:#181818 ;
  display: flex;
  flex-direction: column;
  align-items:center ;

  animation-name: AnimationDashBord;
  animation-duration:  1s;

  >img{
    position:relative ;
    right:10px ;
    width: 72px ;
    height: 72px ;
    margin-top: 45px ;
    cursor: pointer;
    animation-name: AnimationImg;
    animation-duration:  2.5s;
    
  }

  @keyframes AnimationDashBord{
    from{
      opacity:0.5;
      transform:translateX(-30%) ;
    }
    to{
      opacity:1 ;
      transform:translateX(0%) ;

    }
  }

  @keyframes AnimationImg{
    from{
      opacity:0;
    }
    to{
      opacity:1 ;

    }
  }

`
export const IconsUser = styled.div`
  display:flex ;
  flex-direction: column ;
  align-items: center;
  margin-top: 50px ;
  margin-bottom: 40px;
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

export const Separator = styled.div`
 

  width: 75%;
  height:1px ;
  background:#444444;
  margin: 20px 0;

`

export const IconsRedesSocias = styled.div`
  display:flex ;
  flex-direction:column ;

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