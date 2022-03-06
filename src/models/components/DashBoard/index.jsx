import {
  Container,
  IconsUser,
  Home,
  User,
  Settings,
  Email,
  IconsRedesSocias,
  Instagram,
  Linkedin,
  Separator,
  Github
} from './styles'
import DanielSVG from '../../../assets/DF.svg'

export function DashBoard(){
  return(
    <Container>
      <img  src={DanielSVG} alt="Daniel Fernandes Silva" />

      <IconsUser>

        <a href="/">
          <Home/>
        </a>
        <a href="/about">
          <User/>
        </a>
        <a href="/projects">
          <Settings/>
        </a>

        <a href="">
            <Email/>
        </a>
       
      </IconsUser>
      <Separator/>
      <IconsRedesSocias>

        <a href="#">
          <Instagram/>
        </a>

        <a href="#">
          <Linkedin/>
        </a>

        <a href="#">
          <Github/>
        </a>

      </IconsRedesSocias>
    </Container>

  )
}