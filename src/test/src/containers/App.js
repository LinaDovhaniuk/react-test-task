import React from 'react';

import Grid from '@material-ui/core/Grid';

import AddUserForm from '../components/AddUserForm';
import UsersList from '../components/UsersList';

function App() {
  return (
    <Grid alignItems="center" container direction="column" spacing={5}>
        <Grid item style={{ width: '75%' }}><AddUserForm /></Grid>
        <Grid item><UsersList /></Grid>
    </Grid>
  );
}

export default App;
