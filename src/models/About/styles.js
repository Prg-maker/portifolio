import styled , {css} from 'styled-components'
import {
  AiOutlineUser, 
  GiComputing,
  FaReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
} from'../../styles/icons'

export const Container = styled.div`
  height:100% ;
  background-color:#1D1D1D ;
  display:flex ;
  align-items:center ;
  color:white ;
`
 

export const WrapperContainer = styled.div`
  margin-left: 54px;

  h2{
    font-weight: 500;
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 14px;
  }
`  



export const Description = styled.div`
  font-style: normal;
  font-size: 20px;
  line-height:38px ;

`
export const User = styled(AiOutlineUser)`
  width: 150px;
  height: 150px ;
  animation: UserAnimation 3s linear infinite;

  @keyframes UserAnimation{
    0%{
      color: white;
      transition: 1s;
    }
    50%{
      opacity:0.7 ;
      transition: 0.5s;

    }
    100%{
      color: white;
    }
  }
`
export const Computador  = styled(GiComputing)`
  width:25px ;
  height:25px ;
  margin-left:5px ;
`

export const Tecnologias = styled.div`
 

  ul{
    li{
      display:flex ;
      align-items:center ;
    }
    margin-left:10px ;
    margin-bottom:100px ;
  }
  margin-left:50px ;
`

const styleIcons = css`
  width: 25px;
  height: 25px;
  margin-left:5px ;

`

export const React = styled(FaReact)`
  ${styleIcons}
  color: #61dafb ;
  
`
export const Js = styled(SiJavascript)`
  ${styleIcons}

  color:#fcdc00 ;
`
export const Typescript = styled(SiTypescript)`
  ${styleIcons}

  color: #3178c6;
`
export const NodeJs = styled(SiNodedotjs)`
  ${styleIcons}

  color: #43853d;
`
export const Html = styled(SiHtml5)`
  ${styleIcons}

  color:#f08d24 ;

`

export const Css = styled(SiCss3)`
  ${styleIcons}

  color:#1557a1 ;
`

