import React from 'react';
import { connect } from 'react-redux';
import { logOut, updateGreet } from './redux/action';

const Authorize = allowedRoles => {
  return WrappedComponent => {
    class WithAuthorization extends React.Component {
      logOutUser = () => {
        const { dispatch, history } = this.props;
        dispatch(logOut());
        history.push('/');
      };

      welcome = greet => {
        const { dispatch } = this.props;
        dispatch(updateGreet(greet));
      };

      render() {
        const { user } = this.props;
        if (allowedRoles.includes(user.role))
          return (
            <WrappedComponent
              welcome={this.welcome}
              logOutUser={this.logOutUser}
              {...this.props}
            />
          );
        else return <h1>Access Denied</h1>;
      }
    }
    const mapStateToProps = state => ({
      user: state.user,
      greet: state.greet
    });
    return connect(mapStateToProps)(WithAuthorization);
  };
};

export default Authorize;
