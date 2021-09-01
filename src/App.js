import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {ThemeProvider} from 'styled-components';

import HomePage from "./pages/homepage/homepage.component";
import ProjectsPage from './pages/projects/projects.component';

import NavBar from './components/navbar/navbar.component';

function App() {


  
  return (
    <Router>
      {/* <ThemeProvider> */}
        <div className="App">
          <NavBar/>

          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/projects' exact component={ProjectsPage}/>
          </Switch>
        </div>
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;
