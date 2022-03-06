import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {Home} from './Home'
import {Projects} from './Projects'

export function RoutesWeb(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}