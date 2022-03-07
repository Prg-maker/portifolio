import {
  Container,
  IconsUser,
  Home,
  User,
  Settings,
  Email,
  IconsRedesSocias,
  Linkedin,
  Separator,
  Github
} from './styles'

import { Link } from 'react-router-dom'

import DanielSVG from '../../../assets/DF.svg'

export function DashBoard(){
  return(
    <Container>
      <img  src={DanielSVG} alt="Daniel Fernandes Silva" />

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
      <Separator/>
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