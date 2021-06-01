import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginJoon from './Pages/JoonWooPark/Login/Login';
import MainJoon from './Pages/JoonWooPark/Main/Main';
import LoginMyung from './Pages/MyungJunKim/Login/Login';
import MainMyung from './Pages/MyungJunKim/Main/Main';
import LoginSun from './Pages/SunJuOh/Login/Login';
import MainSun from './Pages/SunJuOh/Main/Main';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-joon" component={LoginJoon} />
          <Route exact path="/main-joon" component={MainJoon} />
          <Route exact path="/login-myung" component={LoginMyung} />
          <Route exact path="/main-myung" component={MainMyung} />
          <Route exact path="/login-sun" component={LoginSun} />
          <Route exact path="/main-sun" component={MainSun} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
