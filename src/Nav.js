import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { authCheckState } from './redux/action';
import Authorize from './Authorize';
import Agent from './roles/Agent';
import Manager from './roles/Manager';
import Admin from './roles/Admin';
import Login from './Login';

const agent = Authorize(['agent']);
const manager = Authorize(['manager']);
const admin = Authorize(['admin']);

class Nav extends React.Component {
  componentDidMount() {
    this.props.dispatch(authCheckState());
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path={`/`} component={Login} />
          <Route path="/agent" component={agent(Agent)} />
          <Route path="/manager" component={manager(Manager)} />
          <Route path="/admin" component={admin(Admin)} />
        </div>
      </Router>
    );
  }
}

export default connect()(Nav);
