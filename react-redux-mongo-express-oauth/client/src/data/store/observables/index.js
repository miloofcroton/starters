import { combineEpics } from 'redux-observable';
import itemsEpics from './items';
import thingsEpics from './things';
import sessionsEpics from './items';

export const rootEpic = combineEpics(
  ...itemsEpics,
  ...thingsEpics,
  ...sessionsEpics,
);