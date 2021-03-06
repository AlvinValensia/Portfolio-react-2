import {BrowserRouter, Route, Switch} from "react-router-dom";

// Components
import Homepages from "./components/Homepages";
import Menu from "./components/Menu";

// Pages
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Contacts from "./pages/Contacts"


const App = () => {
  return (
    <BrowserRouter>
    <Menu />
    <Switch>
    <Route path="/" exact>
        <Homepages />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/contact-me">
        <Contacts />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
