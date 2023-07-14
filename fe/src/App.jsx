
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

import {BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import Page3 from './pages/Page3';
import PageU from './pages/PageU';



function App() {
 

  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Page1 />}></Route>
    <Route exact path="/create" element={<Page2 />}></Route>
    <Route exact path="/edit/:id" element={<PageU />}></Route>
    <Route exact path="/view/:id" element={<Page3 />}></Route>
    </Routes>
    </Router>
  )
}

export default App
