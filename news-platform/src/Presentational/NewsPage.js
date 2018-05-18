import React from 'react'
import {Route} from 'react-router-dom';
import {Row,Col,Card} from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';
import {withRouter,Link} from 'react-router-dom'

class NewsPageBase extends React.Component {
	constructor(props){
		super(props);

	}
	componentDidMount(){

	}
	render(){
		console.log(this.props);
//Form For record
		const record = this.props.record;
		return (
				<Card title={record.title} extra={record.createdat}>
					<p>{record.body}</p>
				</Card>
		)
	}
}

export const NewsPage = connect(
	state => {
		return {
			record: state.news.record
		}
	}
)(NewsPageBase);