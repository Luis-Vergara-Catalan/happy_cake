import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import { Home, Contacto, NotFound} from './layouts'

const App = () => {

  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path = '/Home' element ={<Home/>}/>
        <Route path='/contacto' element= {<Contacto />}/>
        <Route path='*' element= {<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
