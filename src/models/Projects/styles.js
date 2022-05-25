import styled from 'styled-components'

import {FiSettings, FaReact} from '../../styles/icons'

export const Container = styled.div`
  display:flex ;
  background: #1D1D1D;
  color:white ;
  overflow: hidden;


  .WrapperContainer{
    position: relative;
    display:flex ;
    flex-direction: column;
    justify-content:center ;
    background: #1D1D1D;
    padding-left:10% ;


    h2{
      font-size: 4rem;
      font-weight:500 ;
      @media (max-width:1000px) {
        font-size: 2rem;

      }
    }

   


   
  }

`


export const Settings = styled(FiSettings)`
  max-width:100%;
  height:100px ;
  padding-right: 10px;
  margin-right: 10px;
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
    font-size: 1.5rem;
    @media (max-width:500px) {
      display: none;
    }
  }


  
`  
export const Content = styled.div`
  display: grid;
  grid-template-columns: auto  auto;
  grid-template-rows: auto  auto;
  margin-bottom:50px ;

  @media(max-width: 1000px){
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    overflow-y:scroll ;
  }

`  
export const ProjectCard = styled.img`
  max-width: 20rem;
  height: 105px;
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
  line-height:1.5rem ;
  a{
    color: white;
    transition:0.2s  ;

    &:hover{
      filter: brightness(0.5);
    }
  }


  @media (max-width:500px) {
    text-align: left;
    font-size: 12px;
  }

`

export const React = styled(FaReact)`
  padding-left:5px ;
`