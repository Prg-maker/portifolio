import {DashBoard} from '../components/DashBoard' 
import Logo from '../../assets/Rectangle 1.svg'
import {
  Container,
  WrapperContent,
  Text,
  Name,
  Description,
  Button
} from './styles'

import {Link} from 'react-router-dom'

export function Home(){




  return(
    <Container>
      <DashBoard/>

      <WrapperContent>

          <Text>
            Hey,
            Meu nome é
            <Name>Daniel F. Silva,</Name>
            WebDeveloper
          </Text>

          <Description>Front End Developer / Back End / Freelancer</Description>
          <Link to="/falarcomigo">
            <Button >
                Fale Comigo!
            </Button>
          </Link>



      </WrapperContent>

      <div className="right">
        <img src={Logo} alt="" />
      </div>


    </Container>
  )
}