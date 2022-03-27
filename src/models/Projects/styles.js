import styled from 'styled-components'

import {FiSettings, FaReact} from '../../styles/icons'

export const Container = styled.div`
  display:flex ;
  background: #1D1D1D;
  color:white ;
  height:100% ;
  .mobal{

  }
  
  .WrapperContainer{
    display:flex ;
    flex-direction: column;
    justify-content:center ;
    margin-left:190px ;

    h2{
      font-size: 64px;
      font-weight:500 ;
      line-height:64px ;
    }

    @media(max-width: 700px){
      margin: 0;
      padding: 0;
      background:red;
      display: none;
    }


   
  }
  @media(max-width: 700px){
    *{
      margin: 0;
      padding: 0;
    }
  }
`


export const Settings = styled(FiSettings)`
  width:100px ;
  height:100px ;
  margin-right: 20px;
  animation-name: FrameWork ;
  animation: FrameWork 3s linear infinite;
  @keyframes FrameWork {
    from{
      transform:rotate(360deg) ;
    }

    to{
      transform:rotate(0deg) ;

    }
    
  }



`


export const ProjectsContainer = styled.div`

  h3{
    margin-top:25px ;
  }

  
`  
export const Content = styled.div`
  display: grid;
  grid-template-columns: auto  auto;
  margin-bottom:50px ;

  @media(max-width: 700px){
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background:red;
  }

`  
export const ProjectCard = styled.img`
  width: 320px;
  height: 155px;
  border-radius:10px ;
  border: 3px solid #F46197 ;
  opacity: 0.5 ;
  cursor: pointer;
  transition:0.2s ;
  margin:24px 0;
  margin-right: 250px;
  &:hover{
    opacity:1 ;
  }

  animation-name:CardAnimation;
  animation-duration: 1s;

  @keyframes CardAnimation {
    0%{
      transform:translateX(50%) ;
      opacity:0.2;
    }
    50%{
      transform:translateX(-20%) ;

    }
    70%{
      transform:translateX(10%) ;
    }

    100%{
      transform:translateX(0%) ;
      opacity:0.5 ;

    }
  }

  
`  
export const Description = styled.div`
  line-height:25px ;
  a{
    color: white;
    transition:0.2s  ;

    &:hover{
      filter: brightness(0.5);
    }
  }

`

export const React = styled(FaReact)`
  padding-left:5px ;
`