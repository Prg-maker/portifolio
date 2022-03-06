import {Container , Settings , ProjectsContainer , Content , ProjectCard , Description,React  } from './styles'

import {DashBoard} from '../components/DashBoard'
import UicloneP from '../../assets/uiCloneP.png'
import uiCloneDicord from '../../assets/uiCloneDicord.png'

export function Projects(){
  return(
    <Container>

      <div className='dashBoard'>
          <DashBoard/>
      </div>

      <div className='WrapperContainer'>


        <h2><Settings/>Meus Projetos</h2>


        <ProjectsContainer>

          <h3>Meu Projetos Principais:</h3>


          <Content>

            <div>

              <a href="https://kind-rosalind-2aa363.netlify.app/">
                <ProjectCard src={UicloneP} alt='project p'/> 
              </a>
              <Description>
                UIclone Pipefy - feito com ReactJs<React/>, <br /> este projeto não tem muita interação com o usúario <br />
                deploy: <a href="https://kind-rosalind-2aa363.netlify.app/">UICLONE Pipefy</a>
              </Description>
            </div>

        
            <div>

              <a href="https://affectionate-johnson-b843c2.netlify.app">
                <ProjectCard src={uiCloneDicord} alt='project Discord'/> 
              </a>
              <Description>
               Uiclone Dicord - feito com ReactJs<React/> e tipescript, <br /> interface do discord deploy: <a href="https://affectionate-johnson-b843c2.netlify.app">Uiclone discord</a>
              </Description>
            </div>
           



          </Content>


        </ProjectsContainer>
      </div>

    </Container>
  )
}