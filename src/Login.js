import React from 'react';
import { connect } from 'react-redux';
import {
  TextField,
  Button,
  Grid,
  CircularProgress,
  Card,
  Typography,
  CardContent
} from '@material-ui/core';
import { withRouter } from 'react-router';
import { login } from './redux/action';

const style = {
  span: {
    display: 'inline-block'
  }
};
class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  submit = () => {
    const { username, password } = this.state;
    const { dispatch } = this.props;
    dispatch(login(username, password));
  };

  componentDidUpdate() {
    const { history, user, isLoginSuccess } = this.props;
    if (isLoginSuccess && user.role) history.push(`/${user.role}`);
  }

  renderLoginComp = () => {
    return (
      <div>
        <TextField
          label="User Name"
          value={this.state.username}
          onChange={this.handleChange('username')}
          margin="normal"
        />
        <br />
        <TextField
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
        />
        <br />
        <Button style={{ backgroundColor: 'grey' }} onClick={this.submit}>
          Login
        </Button>
        <br />
        <div style={{ color: 'red' }}>{this.props.loginError}</div>
        <Card style={{ marginTop: 20 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Rolse
            </Typography>
            <div style={{ display: 'flex' }}>
              <div>
                <span style={style.span}>Username: admin</span>
                <span style={style.span}>Password: admin</span>
              </div>
              <div>
                <span style={style.span}>Username: manager</span>
                <span style={style.span}>Password: manager</span>
              </div>
              <div>
                <span style={style.span}>Username: agent</span>
                <span style={style.span}>Password: agent</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  render() {
    return (
      <Grid container style={{ marginTop: '10%', textAlign: 'center' }}>
        <Grid item xs={12} md={9} lg={6} style={{ margin: '0 auto' }}>
          {this.props.isLoginPending ? (
            <CircularProgress />
          ) : (
            this.renderLoginComp()
          )}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  isLoginPending: state.login.isLoginPending,
  isLoginSuccess: state.login.isLoginSuccess,
  loginError: state.login.loginError,
  user: state.user
});

export default withRouter(connect(mapStateToProps)(Login));
