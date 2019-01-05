import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, DeepPartial } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer, { RootState } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export const history = createBrowserHistory();

export default function configureStore(initialState: DeepPartial<RootState>) {
  const composeEnhancers = composeWithDevTools({});

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      )
    )
  );

  return store;
}
