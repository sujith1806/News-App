import './App.css';
import International from './components/International';
import National  from './components/National';
import Business  from './components/Business';
import Entertainment  from './components/Entertainment';
import Sports  from './components/Sports';
import Technology  from './components/Technology';

import { Button, Segment } from 'semantic-ui-react'
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {

  return(
    <div className="App">
        <h1>News App</h1>
        <Router>
        <Segment inverted>
          <Link to="/in">
          <Button inverted color='teal' style={{margin:'0px 20px'}}>
            International
          </Button>
          </Link>
          <Link to="/na">
          <Button inverted color='teal' style={{margin:'0px 20px'}}>
            National
          </Button>
          </Link>
          <Link to="/bs">
          <Button inverted color='teal' style={{margin:'0px 20px'}}>
            Business
          </Button>
          </Link>
          <Link to="/en">
          <Button inverted color='teal' style={{margin:'0px 20px'}}>
            Entertainment
          </Button>
          </Link>
        </Segment>
        <Segment inverted>
          <Link to="/sp">
          <Button inverted color='teal' style={{margin:'0px 20px'}}>
           Sports
          </Button>
          </Link>
          <Link to="/te">
          <Button inverted color='teal' style={{margin:'0px 20px'}}>
            Technology
          </Button>
          </Link>
        </Segment>
        <Switch>
          <Route path="/in" component={International} />
          <Route path="/na" component={National} />
          <Route path="/bs" component={Business} />
          <Route path="/en" component={Entertainment} />
          <Route path="/sp" component={Sports} />
          <Route path="/te" component={Technology} />
        </Switch>

        </Router>

    </div>
  );
}

export default App;
