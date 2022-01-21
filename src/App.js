import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import Form from './components/Form';
import Display from './components/Display';


function App() {
  return (
    <div className="App container">
      
      <h1 style={{ backgroundColor: "black", color: "yellow", border: "2px dashed yellow"}}
      >Star Wars API Walker</h1>


      {/* Place form comp outside switch 
      to display on every route */}
      <Form/>
      


      {/* Switch will be used to handle different 
      route calls to API >>> depending on inputs from form */}
      <Switch>
        <Route exact path="/:selectedField/:selectedId">
          <Display/>
        </Route>
        
        <Route path="/"></Route>
      </Switch>


    </div>
  );
}

export default App;