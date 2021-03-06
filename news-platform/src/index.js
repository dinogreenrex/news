import ReactDOM from 'react-dom';
import React, { Component } from "react";
import {store} from './storeConfig'

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import {RouterMain} from './RouterDirectives'
import './Components/DropdownMenu'
import './Components/DropdownLogin'


ReactDOM.render(
	<Provider store={store}>
		<RouterMain />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

