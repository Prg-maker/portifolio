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

  @media (max-width:600px) {
    flex-direction: column;
  }

 
  .mobile{
    
    z-index: 10;
  }

`
 

export const WrapperContainer = styled.div`
  margin-left: 3rem;

  h2{
    font-weight: 500;
    font-size: 4rem;
    line-height: 4rem;
    margin: 1rem 0 ;

    @media (max-width:380px){
      font-size: 3rem;
      margin-left: 0rem;

    }
  }
  @media (max-width:380px){
    margin-left: 1rem;
  }

`  



export const Description = styled.div`
  font-style: normal;
  font-size: 20px;
  line-height:38px ;

  @media (max-width:380px){
    font-size: 1rem;
    line-height: 1.1rem;
  }

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
  @media (max-width:600px) {
    display: none;
  }
`
export const Computador  = styled(GiComputing)`
  width:25px ;
  height:25px ;
  margin-left:5px ;
`

export const Tecnologias = styled.div`
  h3{
   margin-top: 1rem;
  }

  ul{

    @media (max-width:600px) {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: auto auto ;
    }

    li{
      display:flex ;
      align-items:center ;
    }
    margin-left:10px ;
    margin-bottom:100px ;
  }
  margin-left:3rem ;

  @media (max-width:600px) {
    margin-left:1rem ;
  }
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

