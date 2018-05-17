import React, {Component} from 'react';
import { Modal, Button, List, Card,Col, Row, Pagination, Table, Dropdown, Menu, Icon } from 'antd';
import 'antd/lib/modal/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/card/style/css'
import 'antd/lib/table/style/css'
import 'antd/lib/menu/style/css'
import axios from 'axios'
import {connect} from 'react-redux';

class NewsFrontBase extends Component {
	componentDidMount(){
		this.props.dispatch(dispatch => {
			dispatch({type: `LOAD_NEWS`});
			axios.get(`http://localhost/api/news`, {
			}).then(
				(response) => {
					dispatch({type: `LOAD_NEWS_SUCCESS`, payload: response.data} );
				},

				(error) => {
					dispatch({type: `LOAD_NEWS_ERROR`, error: error.response.data.message })
				}
			)
		})
	}
	render(){
		const columns = [{
			title: 'title',
			dataIndex: 'title',
			key: 'title',
		}, {
			title: 'createdat',
			dataIndex: 'createdat',
			key: 'createdat',
			width: '12%',
		}, {
			title: 'Description',
			dataIndex: 'shortdesc',
			width: '30%',
			key: 'shortdesc',
		},{
			title: 'Body',
			dataIndex: 'body',
			width: '30%',
			key: 'body',
		}];
		const filters = () =>{
			<div className="filters">
			</div>
		};

		return(
			<div>
				<List className="CoolNewsList"
					grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }}
					itemLayout="vertical"
					dataSource={this.props.records}
					pagination={true}
					renderItem={item => (
						<List.Item>
							<Card title={item.title} extra={item.createdat} >

									{item.shortdesc}

							</Card>
						</List.Item>
					)}
				/>
			</div>
		)
	}
}
export const NewsFront = connect(state => {
	return {
		records: state.news.records,
	}
})(NewsFrontBase);