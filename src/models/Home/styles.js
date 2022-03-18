import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  display:flex ;
  background-color: #1D1D1D;
  overflow: hidden;

  .right{
    overflow: hidden;

    height:100vh ;
    position:absolute ;
    right: 0;

    display:none ;


    @media(min-width: 900px){
      display:flex ;
    }

    img{

      height:100% ;
      animation-name:WrapperContentAmimation ;
      animation-duration: 1s;
    }
  }

  @keyframes WrapperContentAmimation{
    from{
      opacity:0 ;
      transform:translateY(30%) ;
    }
    to{
      opacity:1 ;
      transform:translateY(0%) ;

    }
  }


  @media(max-width: 700px){
    display: flex;
    flex-direction: column  ;
    justify-content: center;
    height: 100vh;
  }



`


export const WrapperContent = styled.div`
  z-index:2 ;
  display:flex ;
  flex-direction:column ;
  justify-content:center ;
  margin-left:44px ;
  margin-bottom:10px ;
  animation-name:WrapperContentAmimation ;
  animation-duration: 1s;

  @keyframes WrapperContentAmimation{
    from{
      opacity:0 ;
      transform:translateY(30%) ;
    }
    to{
      opacity:1 ;
      transform:translateY(0%) ;

    }
  }

  

`
export const Text = styled.h1`
  line-height:64px ;
  font-size:  50px;
  font-weight: bold;
  font-style:normal ;


  @media(max-width: 500px){
    font-size:  32px;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }

`
export const Name = styled.p`
  color: #F46197;
`
export const Description = styled.p`
  font-style:normal ;
  font-size: 14px;
  margin-top: 10px;

`

export const Button = styled.button`
  width: 220px;
height: 55px;
  color:white ;
  text-decoration: none;
  background-color:transparent ;
  border: 2px solid #F46197;
  outline:none ;
  border-radius:10px ;
  cursor: pointer;
  font-size: 16px ;

  margin-top: 35px;
  transition: 0.2s ;
  &:hover{
    filter:brightness(0.8) ;
  }
  
`