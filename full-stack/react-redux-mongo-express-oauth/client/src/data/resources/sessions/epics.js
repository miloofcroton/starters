import { auth0 } from '../../services/oauth/config';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as types from './types';
import * as sessions from './actions';
import { getSignupForm } from '../forms/selectors';


const signIn = action$ => action$.pipe(
  ofType(types.SIGN_IN),
  map(() => auth0.authorize())
);

const signOut = action$ => action$.pipe(
  ofType(types.SIGN_OUT),
  map(() => {
    window.localStorage.removeItem('isSignedIn');
    return auth0.logout();
  })
);

const signUp = (action$, state$) => action$.pipe(
  ofType(types.SIGN_UP),
  mergeMap(() => {
    const { email, password, name, photo } = getSignupForm(state$.value);
    console.log(action$);
    console.log(types.SIGN_OUT);
    Observable.create(observer => {
      auth0.signup(
        {
          connection: 'Username-Password-Authentication',
          email,
          password,
          username: email,
          user_metadata: {
            name,
            photo
          }
        },
        err => console.log(err)
      );
      observer.complete();
    }).pipe(
      map(({ response }) => console.log(response))
    );
  }),
  // filter(Boolean),
);

export const sessionsEpics = [
  signIn,
  signOut,
  signUp,
];