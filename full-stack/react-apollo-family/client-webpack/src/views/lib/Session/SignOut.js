import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import * as routes from '../../routes';
import history from '../../routes/history';

const SignOutButton = () => (
  <ApolloConsumer>
    {client => (
      <button type="button" onClick={() => signOut(client)}>
        Sign Out
      </button>
    )}
  </ApolloConsumer>
);

const signOut = client => {
  localStorage.removeItem('token');
  client.resetStore();
  history.push(routes.SIGN_IN);
};

export { signOut };

export default SignOutButton;
