import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import MyNavBar from './components/MyNavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'




createRoot(document.getElementById('root')).render(
    <>
    
<MyNavBar/>
<Welcome/>
{/* <AllTheBooks/> */}

<App/>
<MyFooter/>



</>
)
