import React from 'react';
import { Button, Grid } from '@material-ui/core';

import Greetings from './Greetings';

const Agent = ({ logOutUser, user, welcome, greet }) => {
  return (
    <Grid container style={{ marginTop: '10%', textAlign: 'center' }}>
      <Grid item xs={12} md={9} lg={6} style={{ margin: '0 auto' }}>
        <h2>{user.role}</h2>
        <h3>
          {greet} {user.name}
        </h3>
        <Button style={{ backgroundColor: 'grey' }} onClick={logOutUser}>
          Logout
        </Button>
        <Greetings welcome={welcome} />
      </Grid>
    </Grid>
  );
};

export default Agent;
