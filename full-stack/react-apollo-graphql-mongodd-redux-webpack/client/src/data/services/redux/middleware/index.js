import { compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createRootEnhancer = enhancers => composeEnhancers(
  ...enhancers
);
