import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, withRouter} from 'react-router-dom';

import {Col,Row} from 'antd'
import {App} from './App'
import {connect} from 'react-redux';
import {NewsFront} from './Presentational/NewsFront'
import {NewsPage} from './Presentational/NewsPage'
import './App.css'

export class RouterMain extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<Router>
				<div>
					<Route
						path="/"
						component={App} />

					<div className="NewsPage">
						<Route exact
						       path="/news/:id"
						       component={NewsPage}
						/>
					</div>
				</div>
			</Router>
		)
	}
}

export const Routes = withRouter(connect()(RouterMain));


