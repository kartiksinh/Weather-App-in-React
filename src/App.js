import Location from './scenes/Location/Location';
import Forecasts from './scenes/Forecasts/Forecasts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/forecasts" component={Forecasts} />
          <Route exact path="/" component={Location} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
