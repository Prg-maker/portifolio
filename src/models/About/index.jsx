import {
  Container, 
  WrapperContainer,
  Description, 
  User, 
  Computador,
  Tecnologias,
  React ,
  Js,
  Typescript,
  NodeJs,
  Html,
  Css
} from './styles'

import {DashBoard} from '../components/DashBoard'
import {MobalDashBoard} from '../components/MobalDashBoard' 

export function About(){

  


  return(
    <Container>
      <DashBoard/>
      <MobalDashBoard/>
      
      <WrapperContainer>
        <h2><User/> Sobre mim!</h2>



        <Description>
          Boomm! meu nome é Daniel, <br />
          atualmente tenho 18, sempre gostei de tecnologia, <br />
          quando era uma criança queria ser um hacker que nem o Neo do Matrix,<br />
          pórem quando cresci acabei sendo programador,<br />
          meio caminho andado.
          Comecei a programar com 16 anos por diversão, <br />
          quando descobri que poderia ganhar dinheiro com um Hobbit, <br />
          comecei a estudar mais sério e nunca parei até agora. 
          <Computador/>
        </Description>


      </WrapperContainer>

      <Tecnologias>
          <h3 className='tecnologias'>Tecnologias que estudo e uso:</h3>
            <ul>
              <li>React<React/></li>
              <li>JavaScript<Js/></li>
              <li>Typescript<Typescript/></li>
              <li>NodeJs<NodeJs/></li>
              <li>HTML<Html/></li>
              <li>CSS<Css/></li>
            </ul>



      </Tecnologias>

    </Container>
  )
}