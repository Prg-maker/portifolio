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
  Separator
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
        <a href="">
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

      </IconsRedesSocias>
    </Container>

  )
}