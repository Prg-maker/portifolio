import {Container , WrapperContainer , Description, User , Computador} from './styles'

import {DashBoard} from '../components/DashBoard'

export function About(){
  return(
    <Container>
      <DashBoard/>

      <WrapperContainer>
        <h2><User/> Sobre mim!</h2>



        <Description>
          Boomm! meu nome é Daniel,
          atualmente tenho 18, sempre gostei de tecnologia,
          quando era uma criança queria ser um hacker que nem o 007,
          pórem quando cresci acabei sendo programador, meio caminho andado. <Computador/>
        </Description>

      </WrapperContainer>

    </Container>
  )
}