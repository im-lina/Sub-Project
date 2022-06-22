import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import Main from './view/Main';
// import * as serviceWorker from './serviceWorker';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// serviceWorker.unregister();
