import {
  Container,
  IconsUser,
  Home,
  User,
  Settings,
  Email,
  IconsRedesSocias,
  Linkedin,
  Github
} from './styles'

import { Link } from 'react-router-dom'


export function MobalDashBoard(){
  return(
    <Container>

      <IconsUser>

        <Link to="/">
          <Home/>
        </Link>

        <Link to="/about">
          <User/>
        </Link>

        <Link to="/projects">
          <Settings/>
        </Link>
      

        <Link to="/FalarComigo">
          <Email/>
        </Link>
       
      </IconsUser>
      <IconsRedesSocias>

        

        <a href="https://www.linkedin.com/in/daniel-silva-73b2371b4/">
          <Linkedin/>
        </a>

        <a href="https://github.com/Prg-maker">
          <Github/>
        </a>

      </IconsRedesSocias>
    </Container>

  )
}