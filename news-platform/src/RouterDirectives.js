import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, withRouter} from 'react-router-dom';

import {Col,Row} from 'antd'
import {App} from './App'
import {connect} from 'react-redux';
import {NewsFront} from './Presentational/NewsFront'

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
				</div>
			</Router>
		)
	}
}

export class RoutesBase extends React.Component{
render(){
	return (
		<div>
			<Row>
			<Route exact
			       path="/"
			       component={NewsFront}
			/>
			</Row>
		</div>
	)
}
}
export const Routes = withRouter(connect(state => {
	return {
	}
})(RoutesBase));


