import React from 'react';
import { Button, Grid } from '@material-ui/core';

const Greeting = ({ welcome }) => {
  return (
    <Grid
      item
      xs={12}
      md={9}
      lg={6}
      style={{ margin: '0 auto', paddingTop: 10 }}
    >
      <h3>Greet in different ways</h3>
      <Button
        style={{ backgroundColor: 'grey', marginRight: 10 }}
        onClick={() => welcome('Wadakam')}
      >
        Wadakam
      </Button>
      <Button
        style={{ backgroundColor: 'grey', marginRight: 10 }}
        onClick={() => welcome('Welcome')}
      >
        Welcome
      </Button>
      <Button
        style={{ backgroundColor: 'grey', marginRight: 10 }}
        onClick={() => welcome('Namaskar')}
      >
        Namaskar
      </Button>
    </Grid>
  );
};

export default Greeting;
