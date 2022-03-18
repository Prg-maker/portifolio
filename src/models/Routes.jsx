import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {Home} from './Home'
import {Projects} from './Projects'
import {About} from './About'
import {FalarComigo} from './FalarComigo'
import {DashBoard} from './components/DashBoard' 

export function RoutesWeb(){
  return(
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/falarComigo' element={<FalarComigo/>}/>
      </Routes>
    </BrowserRouter>
  )
}