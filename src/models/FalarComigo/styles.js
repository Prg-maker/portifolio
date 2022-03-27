import styled from 'styled-components'

import {
  HiOutlineMail, 
  SiBuymeacoffee,
  GoMarkGithub,
  ImLinkedin2,
  BsArrowRight

} from '../../styles/icons'

export const Container = styled.div`
  height:100% ;
  background-color:#1D1D1D ;
  display:flex ;
  color:white ;
  *{
    text-decoration: none;

  }

  
  .avatar{

    display:flex ;
    align-items:center ;
    justify-content:center ;

    img{

      width:245px ;
      height:245px ;
      border-radius:10px ;
      transition: .2s;
      position:fixed ;
      &:hover{
        filter: brightness(1.5);
        cursor: pointer;
        animation-name: animationPhoto;
        animation-duration:5s ;
        animation-direction: alternate;
        cursor: grabbing;
      }

     

    }

    @keyframes animationPhoto{

      from{
        transform:translateX(0%) ;
        transform:translateY(0%) ;
      }to{
        transform:translateX(120%) ;
      }

     
    }


   
  
  }

  @media(max-width: 700px){
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .avatar{
      display: none;
    }

  }
  
`


export const WrapperContainer = styled.div`
  margin-left:141px ;
  display:flex ;
  flex-direction:column ;

  >h2{
    font-size: 32px;
    display:flex;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 64px;
    margin-top:100px ;
    align-items:center ;

    @media(max-width: 700px){
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content:center;
      text-overflow: ellipsis;
      >svg{
        width: 30px;
        height: 30px;
      }
    }
  }


  @media(max-width: 700px){
    margin: 0;
    padding: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
` 
export const Email = styled(HiOutlineMail)`
  width: 100px;
  height: 100px;
`
export const Account = styled.div`
 
  margin-top: 50px ;
  

`


export const Text = styled.div`
  text-decoration: none;
  color:white ;
  font-size:20px ;
  margin-top: 21px;
  display: flex;
  align-items:center ;

` 
export const Coffe = styled(SiBuymeacoffee)`
  width:40px ;
  height:40px ;
  padding: 5px 0  ;
  margin-right:7px;
  position:sticky ;
  border: 1.5px solid #000 ;
  background:#ffdd00 ;
  border-radius:4px ;
  color:black ;
  
`

export const Avatar = styled.img`
  width:25px ;
  height:25px ;
  border-radius:50% ;
`

export const Github = styled(GoMarkGithub)`
  width:40px ;
  height:40px ;

  padding: 5px 0  ;
  margin-right:7px;
  position:sticky ;
  border-radius:4px ;
  color:white ;
  background: #000 ;
  
`

export const Linkedin = styled(ImLinkedin2)`
   width:35px ;
  height:35px ;
  border: 1px solid #fff ;

  padding: 5px 0  ;
  margin-right:7px;
  position:sticky ;
  border-radius:4px ;
  color:white ;
  background: #0a66c2 ;
`

export const Arrow = styled(BsArrowRight)`
  width:50px ;
  height:54 px ;
  color:white;
  position:relative ;
  z-index:2 ;
  left:-180px ;
`