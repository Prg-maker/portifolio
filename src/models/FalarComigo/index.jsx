import { Link } from 'react-router-dom'
import {DashBoard } from '../components/DashBoard' 

import {Container , WrapperContainer, Email, Account, Text, Coffe, Github, Linkedin, Arrow} from './styles'

export function FalarComigo(){
  return(

    <Container>
      <DashBoard/>


      <WrapperContainer> 
        <h2><Email/> Entre em contado comigo!</h2>


        <Account>


          <a href='https://www.buymeacoffee.com/df3296709Q'>
            <Text>

              <Coffe/>Portal Coffee Tag</Text>
          </a>


          <a href='https://github.com/Prg-maker'>
            <Text><Github/>Minha conta Git</Text>
          </a>

          <a href='https://www.linkedin.com/in/daniel-silva-73b2371b4/'>
            <Text><Linkedin/>Meu linkedin</Text>
          </a>


        </Account>




      </WrapperContainer>
      <div className='avatar'>
      
        <Arrow/>
      
        <img src='https://media-exp1.licdn.com/dms/image/C4D03AQE1xpX5aODCtg/profile-displayphoto-shrink_800_800/0/1640389916961?e=1652313600&v=beta&t=GgoYvoyoWsQxT-YPfWnZibkgR15FMI2w2iPdDYCRFwc' alt="" />

        <img src='https:/github.com/Prg-maker.png' alt="" />

      </div>
      
    </Container>
  )
}